'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./order_api');
const ui = require('./order_ui');


const onCart = function(event) {
  event.preventDefault();
  console.log('Cart Button clicked');
};

const onCheckout = function(event) {
  event.preventDefault();
  console.log('Checkout Button clicked')
  $('#products').hide();
  $('#checkout-page').show();
};

const onBrowse = function(event) {
  event.preventDefault();
  $('#checkout-page').hide();
  $('#products').show();
};

const addHandlers = () => {
  $('#cart-button').on('click', onCart);
  $('#check-out-button').on('click', onCheckout);
  $('#logo').on('click', onBrowse);

  $('#checkout-page').hide();
};

module.exports = {
  addHandlers,
  onCart,
  onCheckout,
};
