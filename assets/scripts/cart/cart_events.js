'use strict';

const cartStorage = require('./cart_storage.js');

const onRemoveFromCart = function (event) {
  event.preventDefault();
  let targetName = $(this).parent().parent().attr('id');
  let arr = cartStorage.cartObj.items;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val.name === targetName) {
      arr.splice(i, 1);
    }
  }
  $(this).parent().parent().html("");
};

const addCartHandlers = () => {
  $(document).on('click','.x', onRemoveFromCart);
};

module.exports = {
  addCartHandlers
};
