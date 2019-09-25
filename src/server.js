const { app, BrowserWindow, ipcMain } = require('electron');
const { ObjectId } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cron = require('node-cron');
const Message = require('./app/models/Message');

let mainWindow;

app.on('ready', function () {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(routes);

    cron.schedule('*/30 * * * * *', CronJob, {
        timezone: 'America/Sao_Paulo'
    });

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    });

    //mainWindow.webContents.openDevTools()

    ipcMain.on('qr', (event, arg) => {
        if (arg.qrCode) {
            mainWindow.show();
        }
    });

    ipcMain.on('to', (event, arg) => {
        console.log(`Mensagem enviada para o número ${arg.phone}`)

        if (arg.status) {
            updateSchedule(arg.id)
            mainWindow.hide();
        }

    });

    async function updateSchedule(id) {
        await Message.findByIdAndUpdate(ObjectId(id), {
            $set: {
                status: 'STARTED',
                scheduleAt: null,
                assignedAt: Date.now(),
            }
        }, { new: true });
    }

    async function CronJob() {
        const lists = await Message.find({ $and: [{ scheduleAt: { $lte: Date.now() } }, { status: { $eq: 'SCHEDULED' } }] }).sort({ createdAt: -1 });
        for (const list of lists) {
            var id = `'${list._id}'`;
            send(list.phone, list.message, id);
        }
    }

    async function send(phone, message, id) {

        process.nextTick(() => {
            mainWindow.loadURL(`https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36' });

            mainWindow.webContents.executeJavaScript(`
                var {ipcRenderer} = require('electron');
                var phone = ${phone}
                var id = ${id};
                var sent = false;

                function qrCode() {
                    var qrCode = document.querySelector('#app > div > div > div.landing-window > div.landing-main > div > div._2d3Jz > div > img').src;
                    var qrCodeLoad = document.getElementsByClassName('_1MOym')[0];

                    if (typeof qrCode !== 'undefined') {
                        document.querySelector('#app > div > div > div.landing-window > div.landing-main > div > div._2yUXW > label > input[type=checkbox]').checked = true;
                        ipcRenderer.send('qr', {qrCode:true});
                    }
                    
                    if (typeof qrCodeLoad !== 'undefined') {
                        qrCodeLoad.click();
                    }
                }

                function sending() {
                    var btnSend = document.getElementsByClassName('_3M-N-')[0];
                    var inputSend = document.getElementsByClassName('_3u328')[0];

                    if (typeof inputSend !== 'undefined' && inputSend.textContent && !sent) {
                        btnSend.click();
                        sent = true;
                    }else if(sent){
                        sent = false;
                        ipcRenderer.send('to', {status:true, id, phone});
                    }else {
                        qrCode();
                    }

                }

                setInterval(sending, 3000);
            `, true);
        });

    }

    app.listen(process.env.APP_PORT || 3000);

})