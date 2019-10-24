const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data){
  let errors = {};

  data.text = validText(data.text) ? data.text : '';

  if(!Validator.isLength(data.text, {min: 5, max: 500})){
    errors.text = 'Review must be between 5 and 500 characters';
  }

  if (Validator.isEmpty(data.text)){
    errors.text = 'Text field is required'
  }

debugger;
  if (!Validator.isFloat(data.rating, { min: 1.0, max: 5.0})){
    errors.rating = 'Rating must be between 1 and 5 stars';
  }

  if (Validator.isEmpty(data.rating)){
    errors.text = "Rating can't be blank";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}