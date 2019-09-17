const mongoose = require('mongoose');

/*
mongoose.connect('mongodb://sendbot_whatsapp:WA3gFttuCNISatRC@ds247637.mlab.com:47637/sendbot-whatsapp', { 
    useNewUrlParser: true,
    useFindAndModify: false
});
*/

mongoose.connect('mongodb://localhost/whatsapp', { 
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.Promise = global.Promise


module.exports = mongoose;