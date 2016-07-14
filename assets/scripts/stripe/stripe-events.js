'use strict';

const app = require('../app.js');
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
    "total": 50.00,
  }
};

const cartTotal = () => {
  let sum = 0;
  shoppingCartArray.order.items.forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum * 100;
};

let handler = StripeCheckout.configure({
  key: 'pk_test_GkNup9bDIq38PpNXXeHBDjsL',
  image: '/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  closed: function() {
    console.log('done!!');
    console.log(app.order);
    api.changePaidStatus().then(ui.changePaidStatusSuccess).catch(ui.failure);
  },
  token: function(token) {
    let credentials = {
      stripeToken: token.id,
      amount: cartTotal()
    };
    api.addStripeCharge(credentials).then(ui.success).catch(ui.failure);
  }
});

const onSaveOrder = (event) => {
  event.preventDefault();
  if (!app.user) {
    return;
  }
  let data = shoppingCartArray;
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.failure);
};

const onCheckout = (event) => {
  event.preventDefault();
  if (!app.user) {
    return;
  }
  let data = shoppingCartArray;
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.failure);

  console.log(app.order);
  // opens stripe checkout
  handler.open({
    name: 'Gen X and the Millenials',
    description: 'purchase',
    amount: cartTotal()
  });

  // api.changePaidStatus(data)
  //   .then(ui.changePaidStatusSuccess)
  //   .catch(ui.failure);
};

const addHandlers = () => {
  $('#save-order-button').on('click', onSaveOrder);
  $('#checkout-button').on('click', onCheckout);
  $(window).on('popstate', function() {
    handler.close();
  });
};

module.exports = {
  addHandlers,
};
