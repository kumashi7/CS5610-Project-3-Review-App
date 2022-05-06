const mongoose = require('mongoose');
const ReviewSchema = require('../schema/review.schema');
const ReviewModel = mongoose.model("Review", ReviewSchema);

function createReview(review) {
    return ReviewModel.create(review);
}

function deleteReviewById(id) {
    return ReviewModel.deleteOne({
        _id: id
    }).exec();
}

module.exports = {
    createReview,
    deleteReviewById
}