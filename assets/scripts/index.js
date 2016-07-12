'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/auth-events.js');
// const productEvents = require('./product/product-events.js');
const cartEvents = require('./order/order_events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  // productEvents.addProductHandlers();
  orderEvents.addHandlers();
});
