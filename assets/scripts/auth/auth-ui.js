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

const signUpSuccess = (response) => {
  console.log(response);
  console.log('Signed up');
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log('Signed in as: ' + app.user.email);
  console.log(app.user);
  $('form').trigger('reset');
  //$('.add-to-cart').show();
};

const signOutSuccess = () => {
  app.user = null;
  console.log('Signed out');
  //$('.add-to-cart').hide();
};

const changePasswordSuccess = function() {
  console.log('Password changed successfully');
  $('form').trigger('reset');
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
