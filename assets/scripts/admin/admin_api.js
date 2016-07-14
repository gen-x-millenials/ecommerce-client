'use strict';

const app = require('../app.js');


const adminSignIn = (data) => {
  return $.ajax({
    url: app.host + '/admin-sign-in',
    method: "POST",
    data: data,
  });
};

const adminSignOut = () => {
  return $.ajax({
    url: app.host + '/admin-sign-out/' + app.admin._id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.admin.token,
    },
  });
};

const getAllProducts = () => {
  return $.ajax({
    url: app.host + '/products',
    method: "GET",
  });
};

const updateProduct = function(data,product_id){
  return $.ajax({
    url: app.host + '/products/' + product_id,
    headers: {
      Authorization: 'Token token=' + app.admin.token,
    },
    method: "PATCH",
    data:data,
  });
  };

  const deleteProduct = function(product_id){
    return $.ajax({
      url: app.host + '/products/' + product_id,
      headers: {
      Authorization: 'Token token=' + app.admin.token,
      },
      method: "DELETE",
    });
  };


module.exports = {
  adminSignIn,
  adminSignOut,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
