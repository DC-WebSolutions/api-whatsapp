const mongoose = require('../database');

const MessageScheme = new mongoose.Schema({
    channel: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'SCHEDULED',
        required: true
    },
    scheduleAt: {
        type: Date,
    },
    assignedAt: {
        type: Date,
    }
}, {
    timestamps: true
});

const Message = mongoose.model('Message', MessageScheme);

module.exports = Message;