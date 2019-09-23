const express = require('express');

const Message = require('../models/message');

const router = express.Router();

router.post('/push', async (req, res) => {
    try {
        const Create = await Message.create({
            phone: req.body.phone.replace(/[^0-9]+/g, ''),
            message: req.body.message,
            scheduleAt: Date.now()
        });

        res.send({ Create });
    } catch (err) {
        return res.status(400).send(err)
    }
})

router.post('/register/push', async (req, res) => {
    try {
        const Create = await Message.create({
            channel: req.body.channel,
            phone: req.body.phone.replace(/[^0-9]+/g, ''),
            message: req.body.message,
            scheduleAt: req.body.scheduleAt
        });

        res.send({ Create });
    } catch (err) {
        return res.status(400).send(err)
    }
});

module.exports = router;