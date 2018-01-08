const restRouter = require('./resources/restRouter');
const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');

app.use(history({
  verbose: true
}));

app.use('/api', restRouter);

app.use(express.static('public'));

module.exports = app;
