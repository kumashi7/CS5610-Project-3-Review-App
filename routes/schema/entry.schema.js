const mongoose = require('mogoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    release: {
        type: Number,
        required: true
    },
    content: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        review: {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    }]
});

module.exports = Entry = mongoose.module('Entry', EntrySchema);