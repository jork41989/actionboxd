const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  poster_url: {
    type: String,
    required: false
  },
  trailer_url: {
    type: String,
    required: false
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'review'
  }],
  actors: [{
    type: Schema.Types.ObjectId,
    ref: 'actor'
  }]
});

module.exports = Movie = mongoose.model('movie', MovieSchema);