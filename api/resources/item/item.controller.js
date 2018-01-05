const itemModel = require('./item.model');
const controller = {};

controller.getByQueryParam = (req, res) => {
  itemModel.createItemsResponse(req.query.q).then((result) => {
    res.json(result);
  }, (err) => {
    console.log(err)
  });
};

controller.getDetails = (req, res) => {
  itemModel.createItemResponse(req.params.id).then((result) => {
    res.json(result);
  }, (err) => {
    console.log(err)
  });
};

module.exports = controller;
