'use strict';

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

module.exports = {
  success,
  failure,
};
