const mongoose = require('mongoose');
const EntrySchema = require('../schema/entry.schema');
const EntryModel = mongoose.model("Entry", EntrySchema);

const ReviewModel = require('./review.model');

function createEntry(entry) {
    return EntryModel.create(entry);
}

function getEntryByRelease(year) {
    return EntryModel.findOne({
        release: year
    }).exec();
}

function getEntryById(id) {
    return EntryModel.findOne({
        _id: id
    }).exec();
}

function getEntryByGenre(genre) {
    return EntryModel.findOne({
        genre: genre
    }).exec();
}

function getEntryWithReviews(id) {
    return EntryModel.findById({
        _id: id
    }).populate('reviews').exec();
}

function getAllEntry() {
    return EntryModel.find({}).exec();
}

function deleteEntryById(id) {
    return EntryModel.deleteOne({
        _id: id
    }).exec();
}

function updateEntryById(id, title, release, genre, content) {
    return EntryModel.findOneAndUpdate({
        _id: id
    }, {
        "$set": {
            title: title,
            release: release,
            genre: genre,
            content: content
        }
    }, null);
}

function updateEntryReviewById(id, reviews) {
    return EntryModel.findOneAndUpdate({
        _id: id
    }, {
        "$set": {
            reviews: reviews
        }
    }, null);
}

function addReviewToEntry(id, review) {
    ReviewModel.createReview(review)
        .then(returnReview => {
            EntryModel.findById(id, (error, entry) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(returnReview);
                    entry.reviews.push(returnReview._id);
                    entry.save();
                }
            })
        });
}

module.exports = {
    createEntry,
    getEntryById,
    getEntryByRelease,
    getEntryByGenre,
    getAllEntry,
    deleteEntryById,
    updateEntryById,
    addReviewToEntry,
    getEntryWithReviews,
    updateEntryReviewById
}