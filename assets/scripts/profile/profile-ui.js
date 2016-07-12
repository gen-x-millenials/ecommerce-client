'use strict';

const successCreateProfile = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

module.exports = {
  successCreateProfile,
};
