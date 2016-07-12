'use strict';

const api = require('./stripe-api');
const ui = require('./stripe-ui');

let shoppingCartArray = [];

const onSendCardData = () => {

};

const onPurchaseSubmit = (event) => {
  event.preventDefault();
  let data = shoppingCartArray;

  api.createOrder(data)
    .then(onSendCardData)
    .then(api.updateOrder)
    .then(ui.createOrderSuccess)
    .fail(ui.createOrderFail);
};

const addHandlers = () => {
  $('.purchase').on('submit', onPurchaseSubmit);
};

module.exports = {
  addHandlers,
};
