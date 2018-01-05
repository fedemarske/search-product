const express = require('express');
const itemController = require('./item.controller');

const itemRouter = express.Router();

itemRouter.route('/')
  .get(itemController.getByQueryParam);

itemRouter.route('/:id')
  .get(itemController.getDetails);

module.exports = itemRouter;
