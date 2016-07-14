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

const signInSuccess = (data) => {
  app.admin = data.admin;
  console.log(app.admin);
  console.log('sign in success');

  $('#admin-signIn-modal').modal('hide');
  $('#welcome-page').hide();
  $('#admin-page').show();
};

const signUpSuccess = function(data){
  console.log(data);
  console.log('sign up success');
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

const createProductSuccess = (data) => {
  console.log(data);
};

const productDetails = function(event){
  console.log('product details clicked');
  event.preventDefault();
  console.log($(this).attr('id'));
  $('#update-product-id').val($(this).attr('data-id'));
  $('#update-product-price').val($(this).attr('data-price'));
  $('#update-product-name').val($(this).attr('data-name'));
  $('#update-product-description').val($(this).attr('data-description'));
  $('#update-product-category').val($(this).attr('data-category'));
  $('#update-product-image').attr('src',$(this).attr('data-image'));
  $('#admin-product-modal').modal('show');
};

const getAllProductsSuccess = function(data){
  console.log(data);
  $('#admin-display-all').html('');
  for(let i=0;i<data.products.length;i++){
    $('#admin-display-all').append(
    "<div id='admin_product"+data.products[i]._id+"' "+
    "data-id='"+data.products[i]._id+"' "+
    "data-price='"+data.products[i].price+"' "+
    "data-description='"+data.products[i].description+"' "+
    "data-category='"+data.products[i].category+"' "+
    "data-image='"+data.products[i].image+"' "+
    "data-name='"+data.products[i].name+"' "+
    "class='admin-product' "+
    "value='"+data.products[i]._id+"'>" +
    "<img class='admin-product-image' src="+data.products[i].image+">" +
    "<p>"+data.products[i].name+"</p>" +
    "<p>"+data.products[i].category+"</p>" +
    "<p>$"+data.products[i].price+"</p>" +
    "<p>"+data.products[i].description+"</p>" +
    "</div>");

    $("#admin_product"+data.products[i]._id).on('click', productDetails);

    console.log($("#"+data.products[i]._id));

  }
};

const updateProductSuccess = function(data) {
  console.log(data);
};

const deleteProductSuccess = function(data) {
  console.log(data);
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  createProductSuccess,
  getAllProductsSuccess,
  updateProductSuccess,
  deleteProductSuccess,
};
