const messages = require('../controllers/messages');
const express = require('express');

const route = express.Router();

route.post('/', messages.addMessage);  //Add Message

route.get('/', messages.readMessages) // Read Messages

module.exports = route;