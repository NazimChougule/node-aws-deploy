'use strict'
//This file is AWS Lambda entry point
//All your business code (ExpressJS App) should be done in src/app.js

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const db = require('./models');

const server = awsServerlessExpress.createServer(app);
db.sequelize.authenticate().then(function () { });


module.exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);