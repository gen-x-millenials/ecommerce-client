'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./profile-api');
const ui = require('./profile-ui');

const onCreateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createProfile(data)
  .done(ui.success)
  .fail(ui.failure);
};


const addProfileHandlers = () => {
 $('#profile-info').on('submit', onCreateProfile);
};

module.exports = {
  addProfileHandlers,
};
