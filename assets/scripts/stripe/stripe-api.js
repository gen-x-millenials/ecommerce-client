'use strict';

const app = require('../app.js');

const createOrder = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host + '/orders',
    method: "POST",
    data
  });
};

module.exports = {
  createOrder,
};
