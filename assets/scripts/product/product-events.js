'use strict';

//const getFormFields = require('../../../lib/get-form-fields');

const onShowProduct = function (event) {
  event.preventDefault();
  let item = $(this).children().attr('id');
  console.log(item);
//  $('#' + item);
  //from here, retrieve ID info and then
  //funnel it into handlebars to populate the modal
};

const addProductHandlers = () => {
  $('.img').on('click', onShowProduct);
};

module.exports = {
  addProductHandlers,
};
