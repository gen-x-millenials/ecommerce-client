'use strict';

let cartObj = { items: []};
let inCartStatus = "";
const arr = cartObj.items;

const inCart = function (val) {
  if (this[1] === val.name) {
    val.quantity += 1;
    console.log("yes" + val.name + " " + val.quantity);
    inCartStatus = "yes";
  }
};

const populateCart = function (data) {
  let cartTemplate = require ('../templates/cart.handlebars');
  $('.cart-items').html(cartTemplate(data));
};

const addItems = function () {
  let cartItem = [];
  inCartStatus = "";
  let form = document.getElementById("form");
  for (let i = 1; i < 5; i++) {
       let field = form[i];
       cartItem.push(field.value);
     }
  arr.forEach(inCart,cartItem);
  if (inCartStatus === "yes") {
    console.log("yes");
  } else {
    console.log("UGH");
    arr[arr.length] = {
          quantity: parseInt(cartItem[0]),
          name: cartItem[1],
          price: parseFloat(cartItem[2]),
          id: cartItem[3]
    };
  }
  return populateCart(cartObj);
};

module.exports = {
  addItems,
};
