'use strict';

const cartStorage = require('./cart_storage.js');

const onRemoveFromCart = function (event) {
  event.preventDefault();
  console.log(cartStorage.cartObj);
};

const addCartHandlers = () => {
  $(document).on('click','.x', onRemoveFromCart);
};

module.exports = {
  addCartHandlers
};
