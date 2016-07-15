'use strict';

//const getFormFields = require('../../../lib/get-form-fields');
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
  // console.log("this is the document ready function");
  productApi.indexProducts()
  .done(productUi.getProductsSuccess);
};

const onAddToCart = function (event) {
  event.preventDefault();
  let form = document.getElementById("form");
  let targ = form[1];
  let val = targ.value;
  if (val > 0) {
    cartStorage.addItems();
    $('.item-added').fadeIn(500).fadeOut(1000);
    if (cartStorage.cartObj.items.length > 0) {
      $('.no-items').hide();
    }
  } else {
    $('.invalid').fadeIn(500).fadeOut(1500);
  }
};

const onWine = function(event) {
  event.preventDefault();
  $('#wine-button').css('border','2px solid white');
  $('#beer-button').css('border','none');
  $('#cider-button').css('border','none');
  $('#all-button').css('border','none');
  productApi.getWine()
  .done(productUi.getProductsSuccess);
};

const onBeer = function(event) {
  event.preventDefault();
  $('#wine-button').css('border','none');
  $('#beer-button').css('border','2px solid white');
  $('#cider-button').css('border','none');
  $('#all-button').css('border','none');
  productApi.getBeer()
  .done(productUi.getProductsSuccess);
};

const onCider = function(event) {
  event.preventDefault();
  $('#wine-button').css('border','none');
  $('#beer-button').css('border','none');
  $('#cider-button').css('border','2px solid white');
  $('#all-button').css('border','none');
  productApi.getCider()
  .done(productUi.getProductsSuccess);
};

const onAll = function(event) {
  event.preventDefault();
  $('#wine-button').css('border','none');
  $('#beer-button').css('border','none');
  $('#cider-button').css('border','none');
  $('#all-button').css('border','2px solid white');
  productApi.indexProducts()
  .done(productUi.getProductsSuccess);
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

  $('#wine-button').on('click', onWine);
  $('#beer-button').on('click', onBeer);
  $('#cider-button').on('click', onCider);
  $('#all-button').on('click', onAll);
};

module.exports = {
  addProductHandlers,
};
