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
    photo_url: {
        type: String,
        required: false
    },
    movies: [{ type: Schema.Types.ObjectId, ref: 'movie' }]
})

const Actor = mongoose.model('actor', ActorSchema);
module.exports = Actor