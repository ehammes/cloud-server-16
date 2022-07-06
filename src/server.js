'use strict'; // from Lab 02

// **REQUIRE
const express = require('express');
const app = express();
const notFoundHandler = require('../src/error-handlers/404');
const internalError = require('../src/error-handlers/500');
const logger = require('../src/middleware/logger');
const validator = require('../src/middleware/validator');
const PORT = process.env.PORT || 3002;

// **ROUTES

app.get('/', (req, res, next) => {
  res.status(200).send('Greetings!');
});

app.get('/person', logger, validator, (req, res, next) => {
  let { name } = req.query;
  let object = {name};
  res.status(200).json(object);
});

//**USE
app.use(logger);
app.use('*', logger, notFoundHandler);
app.use(internalError);

module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log(`listening on port ${PORT}`)),
};
