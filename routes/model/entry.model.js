const mongoose = require('mongoose');
const EntrySchema = require('../schema/entry.schema');
const EntryModel = mongoose.model("Entry", EntrySchema);

function createEntry(entry) {
    return EntryModel.create(entry);
}

function getEntryByRelease(year) {
    return EntryModel.findOne({release: year}).exec();
}

function getEntryByGenre(genre) {
    return EntryModel.findOne({genre: genre}).exec();
}

function getAllEntry() {
    return EntryModel.find({}).exec();
}

module.exports = {
    createEntry,
    getEntryByRelease,
    getEntryByGenre,
    getAllEntry
}