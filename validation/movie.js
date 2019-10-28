const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateMovieInput(data) {
  let errors = {};


  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';
  data.poster_url= validText(data.poster_url) ? data.poster_url : '';
  data.trailer_url = validText(data.trailer_url) ? data.trailer_url : '';

  if (!Validator.isLength(data.title, { min: 2, max: 50 })) {
    errors.title = 'Title must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.description, { min: 5, max: 1000 })) {
    errors.description = 'Description must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(String(data.year))) {
    errors.year = 'Year field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.poster_url)) {
    errors.poster_url = 'Poster_url field is required';
  }

  if (Validator.isEmpty(data.background_image_url)) {
    errors.background_image_url = 'Poster_url field is required';
  }

  if (Validator.isEmpty(data.trailer_url)) {
    errors.trailer_url = 'Trailer_url field is required';
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};