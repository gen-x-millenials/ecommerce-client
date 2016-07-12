'use strict';

const app = require('../app.js');

const seeProduct = function () {
  return $.ajax({
    url: app.host + '/profiles/' + app.products.id,
    method: 'GET',
  });
};

module.exports = {
  seeProduct,
};
