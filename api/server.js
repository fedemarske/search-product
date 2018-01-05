const restRouter = require('./resources/restRouter');
const express = require('express');
const app = express();

app.use('/api', restRouter);
// catch all
app.all('*', (req, res) => {
  res.json({ok: true})
})

module.exports = app;
