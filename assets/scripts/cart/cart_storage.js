'use strict';

let cartObj = {
  items: [],
  total: 0
};

let inCartStatus = "";
const arr = cartObj.items;

const inCart = function (val) {
  if (this[1] === val.name) {
    val.quantity += parseInt(this[0]);
    inCartStatus = "yes";
  }
};
const calculateTotal = function (val) {
  this.push(val.price * val.quantity);
};

const populateCart = function (data) {
  let cartTemplate = require ('../templates/cart.handlebars');
  $('.cart-items').html(cartTemplate(data));
};

const addItems = function () {
  let cartItem = [];
  inCartStatus = "";
  let itemTotal = [];
  let form = document.getElementById("form");
  for (let i = 1; i < 5; i++) {
       let field = form[i];
       cartItem.push(field.value);
     }
  arr.forEach(inCart,cartItem);
  if (inCartStatus !== "yes") {
    arr[arr.length] = {
          quantity: parseInt(cartItem[0]),
          name: cartItem[1],
          price: parseInt(cartItem[2]),
          id: cartItem[3]
    };
  }
  arr.forEach(calculateTotal,itemTotal);
  cartObj.total = itemTotal.reduce((pv, cv) => pv+cv, 0);
  console.log(cartObj.total);
  return populateCart(cartObj);
};

module.exports = {
  addItems,
  cartObj,
};
