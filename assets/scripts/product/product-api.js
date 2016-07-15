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

const getWine = function() {
  return $.ajax({
    url: app.host + '/wine',
    method: 'GET',
  });
};

const getBeer = function() {
  return $.ajax({
    url: app.host + '/beer',
    method: 'GET',
  });
};

const getCider = function() {
  return $.ajax({
    url: app.host + '/cider',
    method: 'GET',
  });
};

module.exports = {
  indexProducts,
  showProduct,
  getWine,
  getBeer,
  getCider,
};
