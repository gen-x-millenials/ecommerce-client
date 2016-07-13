'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const productApi = require('./product-api.js');
const productUi = require('./product-ui.js');
const cartStorage = require('../cart/cart_storage.js');
//const app = require('../app.js');

const onShowProduct = function (event) {
  event.preventDefault();
  $('.show-item').html("");
  let id = $(this).children().attr('id');
  productApi.showProduct(id)
  .done(productUi.showSuccess);
};

const onGetProducts = function () {
  console.log("this is the document ready function");
  productApi.indexProducts()
  .done(productUi.getProductsSuccess);
};


const onAddToCart = function (event) {
  event.preventDefault();
  cartStorage.addItems();
};

//this method is a little odd: because ID's aren't the index values {ugh}
//I am basically saying "GET all products, find the one at the index equal
//to the ID of the product minus 1". So if you click the 1st image, you are
//finding the product at index 1-1, so 0, and then finding the _id of that.
//then, there's another get request to SHOW just that item and pass it into
//handlebars. Will refactor if necessary but this works.


const addProductHandlers = () => {
  $('.add-to-cart').on('click', onAddToCart);
  $(document).ready(onGetProducts);
  $(document).on('click','.img', onShowProduct);
};

module.exports = {
  addProductHandlers,
};
