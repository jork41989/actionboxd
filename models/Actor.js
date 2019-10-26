const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    movies: [{ type: Schema.Types.ObjectId, ref: 'movie' }]
})

const Actor = mongoose.model('actors', ActorSchema);
module.exports = Actor