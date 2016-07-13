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

const addStripeChargeToOrder = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/charge',
      method: "POST",
      // headers: {
      //   Authorization: 'Token token=' + app.user.token,
      // },
      // dataType: 'json',
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
  addStripeChargeToOrder,
};
