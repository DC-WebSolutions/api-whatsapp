const express = require('express');
const Message = require('./app/controllers/MessageController');

const routes = express.Router();

routes.get('/messages', Message.index);
routes.post('/push', Message.store);

module.exports = routes;