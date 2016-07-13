'use strict';

const app = require('../app.js');

const signUp = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/sign-up',
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


const signIn = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data
  });
};

const signOut = () => {
  console.log(app.user.token);
  return $.ajax({
    url: app.host + '/sign-out/' + app.user._id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user._id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
