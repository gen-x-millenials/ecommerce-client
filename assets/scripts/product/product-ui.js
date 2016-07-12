'use strict';

const productApi = require('./product-api.js');

const showSuccess = function (data) {
  let productTemplate = require ('../templates/product.handlebars');
  $('.show-item').prepend(productTemplate(data));
};

const indexSuccess = function (data) {
  let index = $('.item-id-temp').val();
  let id = data.products[index]._id;
  productApi.showProduct(id)
  .done(showSuccess);
};

module.exports = {
  indexSuccess,
  showSuccess,
};
