'use strict';

const createProfile = function (data) {
  return $.ajax(
  {
    url: app.host + '/profiles',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
    data: data,
  });
};

module.exports = {
  createProfile,
};
