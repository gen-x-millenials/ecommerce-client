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
  console.log(app.user);
  console.log('Signed in as: ' + app.user.email);
  $('form').trigger('reset');
};

const signOutSuccess = () => {
  app.user = null;
  console.log('Signed out');
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
