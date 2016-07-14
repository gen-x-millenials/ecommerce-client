'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./order_api');
const ui = require('./order_ui');


const onCart = function(event) {
  event.preventDefault();
  // console.log('Cart Button clicked');
};

const onCheckout = function(event) {
  event.preventDefault();
  // console.log('Checkout Button clicked')
  $('#products').hide();
  $('#checkout-page').show();
};

const onBrowse = function(event) {
  event.preventDefault();
  $('#checkout-page').hide();
  $('#products').show();
};

const onGetOrderHistory = (event) => {
  event.preventDefault();
  // console.log("this is get order history");
  api.getOrderHistory()
  .done(ui.getOrderSuccess)
  // .fail(ui.failure);
};

const onDeleteOrder = (event)=> {
  event.preventDefault();
  let orderIDtoDelete = $(event.target).data("order-id");
  // console.log(orderIDtoDelete);
  api.deleteOrder(orderIDtoDelete)
  .done(ui.successDeleteOrder)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#cart-button').on('click', onCart);
  $('#check-out-button').on('click', onCheckout);
  $('#logo').on('click', onBrowse);
  $('#get-orders').on('submit', onGetOrderHistory);
  $('#checkout-page').hide();
  $(document).on('click','.deleteButtons', onDeleteOrder);
};



module.exports = {
  addHandlers,
  onCart,
  onCheckout,
};
