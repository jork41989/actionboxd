const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  watched_movies: [{ type: Schema.Types.ObjectId, ref: 'movie' }]
})

const User = mongoose.model('users', UserSchema);
module.exports = User