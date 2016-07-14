'use strict';

//const productApi = require('./product-api.js');

const showSuccess = function (data) {
  let productTemplate = require ('../templates/product.handlebars');
  $('.show-item').prepend(productTemplate(data));
};

const getProductsSuccess = function (products) {
  // console.log(products);
  // console.log("this is the get products success function");
  let displayAllProducts = require ('../templates/display-all-products.handlebars');
  $('#products').prepend(displayAllProducts(products));
};

module.exports = {
  showSuccess,
  getProductsSuccess,
};
