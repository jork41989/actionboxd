const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateActorInput(data) {
  let errors = {};


  data.name = validText(data.name) ? data.name : '';
  data.bio = validText(data.bio) ? data.bio : '';
  data.photo_url = validText(data.photo_url) ? data.photo_url : '';

  if (!Validator.isLength(data.name, { min: 2, max: 50 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.bio, { min: 2, max: 50 })) {
    errors.bio = 'Bio must be between 2 and 30 characters';
  }


  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'Bio field is required';
  }

  if (Validator.isEmpty(data.photo_url)) {
    errors.photo_url = 'Photo URL field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}