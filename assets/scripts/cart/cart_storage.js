'use strict';


const addItems = function () {
  let cartItem = [];
  for (let i = 1; i < 5; i++) {
    let field = document.getElementById("form")[i];
    cartItem.push(field.value);
  }
  console.log(cartItem);
};

module.exports = {
  addItems,
};
