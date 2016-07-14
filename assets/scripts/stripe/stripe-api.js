'use strict';

const app = require('../app.js');

const createOrder = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/orders',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
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

const addStripeCharge = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/charge',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
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

const changePaidStatus = () => {
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/orders/' + app.order._id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
        "order": {
          "paid": true
        }
      },
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
  addStripeCharge,
  changePaidStatus,
};
