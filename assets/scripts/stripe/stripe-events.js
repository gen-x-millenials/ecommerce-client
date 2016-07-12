'use strict';

const app = require('../app.js');

const onPurchaseSubmit = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  
  api.createOrder(data)
    .done(ui)
};
