const Message = require('../models/Message');

module.exports = {
    async index(req, res) {
        const messages = await Message.find().sort({ createdAt: -1 });

        res.json(messages);
    },

    async store(req, res) {
        try {
            if (req.body.scheduleAt) {
                const create = await Message.create({
                    channel: req.body.channel,
                    phone: req.body.phone.replace(/[^0-9]+/g, ''),
                    message: req.body.message,
                    scheduleAt: req.body.scheduleAt
                });

                res.send({ create });
            } else {
                const create = await Message.create({
                    phone: req.body.phone.replace(/[^0-9]+/g, ''),
                    message: req.body.message,
                    scheduleAt: Date.now()
                });

                res.send({ create });
            }
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}