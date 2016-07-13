'use strict';

let cartObj = { item: []};

const populateCart = function (data) {
  let cartTemplate = require ('../templates/cart.handlebars');
  $('.cart-items').html(cartTemplate(data));
};

const addItems = function () {
  let cartItem = [];
  for (let i = 1; i < 5; i++) {
    let field = document.getElementById("form")[i];
    cartItem.push(field.value);
  }
  let index = cartObj.item.length;
  console.log(index);
  cartObj.item[index] = {
        quantity: cartItem[0],
        name: cartItem[1],
        price: cartItem[2],
        id: cartItem[3]
  };
  console.log(cartObj);
  return populateCart(cartObj);
};

module.exports = {
  addItems,
};
