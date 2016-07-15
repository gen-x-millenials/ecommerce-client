'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const adminApi = require('./admin_api');
const adminUi = require('./admin_ui');
const app = require('../app.js');


// const onSignUp = function(event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   console.log(data)
//   api.signUp(data)
//   .done(ui.signUpSuccess)
//   .fail(ui.failure);
// };

const onAdminSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  adminApi.adminSignIn(data)
  .done(adminUi.signInSuccess)
  .fail(adminUi.signInFail);
};

const onAdminSignOut = (event) => {
  event.preventDefault();
  adminApi.adminSignOut()
  .done(adminUi.signOutSuccess)
  .fail(adminUi.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  adminApi.changePassword(data)
  .done(adminUi.success)
  .fail(adminUi.failure);
};


const onUploadImage = function(event){
  console.log('upload button clicked');
    event.preventDefault();

    return $.ajax({
     method: 'POST',
     url: 'https://brewtiq-api.herokuapp.com/uploads',
     data: new FormData(event.target),
     contentType: false,
     processData: false,
   })
   .done((data)=> console.log(data))
   .fail((error) => console.error(error));
};

const onCreateProduct = function(event){
  console.log('upload button clicked');
    event.preventDefault();

    return $.ajax({
     method: 'POST',
     url: 'https://brewtiq-api.herokuapp.com/products',
     headers: {
      Authorization: 'Token token=' + app.admin.token,
      },
     data: new FormData(event.target),
     contentType: false,
     processData: false,
   })
   .done(adminUi.createProductSuccess)
   .fail(adminUi.failure);
};

const loadAll = function(){
  $('#create-product').hide();
  $('#admin-display-all').show();
  adminApi.getAllProducts()
  .done(adminUi.getAllProductsSuccess)
  .fail(adminUi.failure);
};

const onUpdateProduct = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  console.log(data);
  let product_id=$('#update-product-id').val();
  console.log(product_id);

  adminApi.updateProduct(data,product_id)
  .done(adminUi.updateProductSuccess)
  .fail(adminUi.failure);
};

const onDeleteProduct = function(event) {
  event.preventDefault();

  let product_id=$('#update-product-id').val();
  console.log(product_id);

  adminApi.deleteProduct(product_id)
  .done(adminUi.deleteProductSuccess)
  .fail(adminUi.failure);
};

const onCreateProductButton = function(event) {
  event.preventDefault();
  $('#admin-display-all').hide();
  $('#create-product').show();

};

const onEnter = function(event) {
  event.preventDefault();
  $('#welcome-page').hide();
  $('#content').show();
  $('header').show();
};

const onAdminModal = function(event){
  event.preventDefault();

  $('#admin-signIn-modal').modal('show');
};


const addHandlers = () => {
  $('#admin-sign-in').on('submit', onAdminSignIn);
  $('#admin-sign-out').on('click', onAdminSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#multipart-form-data').on('submit', onUploadImage);
  $('#create-product').on('submit', onCreateProduct);

  $('#admin-get-all').on('click', loadAll);
  $('#admin-update-product').on('submit', onUpdateProduct);
  $('#admin-delete-product').on('click', onDeleteProduct);

  $('#create-product').hide();
  $('#admin-page').hide();
  $('#admin-create-product').on('click', onCreateProductButton);

  $('#content').hide();
  $('header').hide();
  $('#enter-button').on('click', onEnter);
  $('#admin-enter').on('click', onAdminModal);
};
//
module.exports = {
  addHandlers,
};
