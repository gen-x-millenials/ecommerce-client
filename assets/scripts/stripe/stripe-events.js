'use strict';

const app = require('../app.js');
const api = require('./stripe-api');
const ui = require('./stripe-ui');
const cart = require('../cart/cart_storage');

let currentOrder = {
  "order": cart.cartObj
};

// const cartTotal = () => {
//   let sum = 0;
//   shoppingCartArray.order.items.forEach((item) => {
//     sum += item.price * item.quantity;
//   });
//   return sum * 100;
// };

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
      amount: currentOrder.order.total
    };
    api.addStripeCharge(credentials).then(ui.success).catch(ui.failure);
  }
});

const onSaveOrder = (event) => {
  event.preventDefault();
  if (!app.user) {
    return;
  }
  let data = currentOrder;
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.failure);
};

const onCheckout = (event) => {
  event.preventDefault();
  if (!app.user) {
    return;
  }
  let data = currentOrder;
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.failure);

  console.log(app.order);
  // opens stripe checkout
  handler.open({
    name: 'Gen X and the Millenials',
    description: 'purchase',
    amount: currentOrder.order.total
  });
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
