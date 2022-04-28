const mongoose = require('mogoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    entry: {
        type: Schema.Types.ObjectId,
        ref: 'Entry'
    }
});

module.exports = Review = mongoose.module('Review', ReviewSchema);