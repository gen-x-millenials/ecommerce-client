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
  image: 'https://shireen-wdi-bucket.s3.amazonaws.com/2016-07-15/0b06f60ba5ae450967b7cae7ed67390b.png',
  locale: 'auto',
  token: function(token) {
    let credentials = {
      stripeToken: token.id,
      amount: currentOrder.order.total * 100
    };
    api.addStripeCharge(credentials).then(ui.success).catch(ui.failure);
  }
});

// const onSaveOrder = (event) => {
//   event.preventDefault();
//   if (!app.user || currentOrder.order.total === 0) {
//     return;
//   }
//   let data = currentOrder;
//   api.createOrder(data)
//     .then(ui.createOrderSuccess)
//     .catch(ui.failure);
// };

const onCheckout = (event) => {
  event.preventDefault();
  if (!app.user || currentOrder.order.total === 0) {
    return;
  }
  let data = currentOrder;
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.failure);

  // console.log(app.order);
  // opens stripe checkout
  handler.open({
    name: 'Gen X and the Millenials',
    description: 'purchase',
    closed: function() {
      // console.log('done!!');
      // console.log(app.order);
      api.changePaidStatus().then(ui.changePaidStatusSuccess).catch(ui.failure);
    },
    amount: currentOrder.order.total * 100
  });
};

const addHandlers = () => {
  // $('#save-order-button').on('click', onSaveOrder);
  $('#checkout-button').on('click', onCheckout);
  $(window).on('popstate', function() {
    handler.close();
  });
};

module.exports = {
  addHandlers,
};
