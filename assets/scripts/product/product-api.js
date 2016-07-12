'use strict';

const app = require('../app.js');

const indexProducts = function () {
  return $.ajax({
    url: app.host + '/products/',
    method: 'GET',
  });
};

const showProduct = function (id) {
  return $.ajax({
    url: app.host + '/products/' + id,
    method: 'GET',
  });
};

module.exports = {
  indexProducts,
  showProduct,
};
