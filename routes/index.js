const express = require('express');

const router = express.Router();

const message = require('./messages');
router.use('/messages', message);

module.exports = router;