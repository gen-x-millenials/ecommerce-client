'use strict';

const app = require('../app.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const createOrderSuccess = (response) => {
  app.order = response.order;
  console.log(app.order);
};

const changePaidStatusSuccess = (response) => {
  console.log(response);
};

module.exports = {
  success,
  failure,
  createOrderSuccess,
  changePaidStatusSuccess,
};
