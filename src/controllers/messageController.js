const express = require('express');

const Message = require('../models/message');

//const send = require('./index');

const router = express.Router();

router.post('/push', async (req, res) => {
    try {
        const data = req.body;
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})

router.post('/register/push', async (req, res) => {
    try {
        const Create = await Message.create(req.body);

        res.send({ Create });
    } catch (err) {
        return res.status(400).send(err)
    }
});

module.exports = router;