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
  cartStorage.updateTotal();
  if (arr.length < 1) {
    $('.no-items').show();
  }
};

const onChangeQuant = function (event) {
  event.preventDefault();
  let id = $(this).parent().parent().attr('id');
  let index = cartStorage.cartObj.items
    .findIndex(val => val.name === id);
  let target = cartStorage.cartObj.items[index];
  target.quantity = $(this).val();
  cartStorage.updateTotal();
  if ($(this).val() < 1) {
    $(this).parent().parent().html("");
    $('.no-items').show();
    cartStorage.cartObj.items.splice(index, 1);
  }
  $('.quant').off('mouseleave');
};

const onSelectQuant = function (event) {
  event.preventDefault();
  $(this).on('mouseleave', onChangeQuant);
};

const addCartHandlers = () => {
  $(document).on('click','.x', onRemoveFromCart);
  $(document).on('click', '.quant', onSelectQuant);
//  $(document).on('mouseleave', '.quant', onChangeQuant);
};

module.exports = {
  addCartHandlers
};
