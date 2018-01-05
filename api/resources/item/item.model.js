const itemServices = require('./item.services');
const itemModel = {};

itemModel.createItemsResponse = (queryParam) => {

  return new Promise((resolve, reject) => {
    itemServices.getAllByQuery(queryParam).then((raw) => {
      resolve({
        "author": getAuthor(),
        "categories": getCategories(JSON.parse(raw)),
        "items": getItems(JSON.parse(raw))

      });
    }).catch((err) => {
      reject({'error': err});
    });
  });
};

itemModel.createItemResponse = (id) => {

  return new Promise((resolve, reject) => {
    itemServices.getDetails(id).then((raw) => {
      return {
        "author": getAuthor(),
        "item": getItem(JSON.parse(raw), true)
      };
    }).then(addDescription)
      .then((item) => {
        resolve(item);
      })
      .catch((err) => {
      reject({'error': err});
    });
  });
};

getAuthor = () => {
  return {
    "name": "Federico",
    "lastname": "Marske"
  }
};

getCategories = (raw) => {
  console.log(raw.filters[0])
  let categories = raw.filters[0].values[0].path_from_root;
  return categories.map((category) => {
    return category.name;
  })
};

getItem = (itemRaw, isDetail) => {
  let item = {
    "id": itemRaw.id,
    "title": itemRaw.title,
    "price": getPrice(itemRaw.price, itemRaw.currency_id),
    "picture": itemRaw.thumbnail,
    "condition": itemRaw.condition,
    "free_shipping": itemRaw.shipping.free_shipping
  };

  if (isDetail) {
    item.sold_quantity = itemRaw.sold_quantity;
  }

  return item;
};

getItems = (raw) => {
  let items = raw.results;

  if (items.length > 4) {
    items = items.slice(0, 4)
  }

  return items.map((item) => {
    return getItem(item, false);
  })
};

getPrice = (priceRaw, currency_id) => {
  let priceSplit = priceRaw.toString().split('.');

  return {
    "currency": currency_id,
    "amount": priceSplit[0],
    "decimals": priceSplit[1]
  }
};

addDescription = (item) => {
  return new Promise((resolve, reject) => {
    itemServices.getDescription(item.item.id).then((result) => {
      item.description = JSON.parse(result).plain_text;
      resolve(item);
    })
  });
};

module.exports = itemModel;
