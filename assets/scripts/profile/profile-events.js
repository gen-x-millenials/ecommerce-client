'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./profile-api');
const ui = require('./profile-ui');

const onCreateProfile = (event) => {
  event.preventDefault();
  console.log('hello');
  let data = getFormFields(event.target);
  console.log(data);
  debugger;
  api.createProfile(data)
  // .done(ui.successCreateProfile)
  // .fail(ui.failure);
};


const addProfileHandlers = () => {
  $('#profile-form').on('submit', onCreateProfile);
};

module.exports = {
 addProfileHandlers,
};
