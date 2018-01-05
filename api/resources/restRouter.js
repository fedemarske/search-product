const express = require('express');
const itemRouter =  require('./item');

restRouter = express.Router();

restRouter.use('/items', itemRouter);
//restRouter.use(apiErrorHandler);


module.exports = restRouter;
