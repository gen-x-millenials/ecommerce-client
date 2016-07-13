'use strict';

const app = require('../app.js');

const createOrder = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/orders',
      method: "POST",
      data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

module.exports = {
  createOrder,
};
