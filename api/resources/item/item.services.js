const request = require('request-promise');
const endpoints = require('../endpointsML');
const itemServices = {};

itemServices.getAllByQuery = (queryParam) => {
  return request(endpoints.items + queryParam)
};

itemServices.getDetails = (id) => {
  return request(endpoints.item + id)
};

itemServices.getDescription = (id) => {
  return request(endpoints.item + id + '/description')
};

module.exports = itemServices;
