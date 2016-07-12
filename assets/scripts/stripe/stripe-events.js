'use strict';

const api = require('./stripe-api');
const ui = require('./stripe-ui');

let shoppingCartArray = {
  "order": {
    "items": [
      {
        "product_id": "578496f937f3cb1e4f3b59d4",
        "price": 10,
        "quantity": 1
      },
      {
        "product_id": "5784961b37f3cb1e4f3b59d3",
        "price": 20,
        "quantity": 2
      }
    ],
    "total": 50.00
  }
};

const onSendCardData = () => {

};

const onPurchaseSubmit = (event) => {
  event.preventDefault();
  let data = shoppingCartArray;

  api.createOrder(data);
    // .then(onSendCardData)
    // .then(api.updateOrder)
    // .then(ui.createOrderSuccess)
    // .fail(ui.createOrderFail);
};

const addHandlers = () => {
  $('.purchase').on('click', onPurchaseSubmit);
};

module.exports = {
  addHandlers,
};
