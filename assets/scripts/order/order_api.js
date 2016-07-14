'use strict';

const app = require('../app.js');


const getOrderHistory = () => {
  return $.ajax({
    url: app.host + '/owner_orders/' + app.user._id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteOrder = function (orderIDtoDelete) {
  return $.ajax(
  {
    url: app.host + '/orders/' + orderIDtoDelete,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }
  );
};

module.exports = {
  getOrderHistory,
  deleteOrder,
};
