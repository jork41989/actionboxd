const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Integer,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);