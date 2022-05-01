const mongoose = require('mongoose');
const EntrySchema = require('../schema/entry.schema');
const EntryModel = mongoose.model("Entry", EntrySchema);

function createEntry(entry) {
    return EntryModel.create(entry);
}

function getEntryByRelease(year) {
    return EntryModel.findOne({release: year}).exec();
}

function getEntryById(id) {
    return EntryModel.findOne({_id: id}).exec();
}

function getEntryByGenre(genre) {
    return EntryModel.findOne({genre: genre}).exec();
}

function getAllEntry() {
    return EntryModel.find({}).exec();
}

function deleteEntryById(id) {
    return EntryModel.deleteOne({_id: id}).exec();
}

function updateEntryById(id, title, release, genre, content) {
    return EntryModel.findOneAndUpdate({_id: id}, { "$set": {title: title, release: release, 
        genre: genre, content: content}}, 
        null, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Original Doc : ",docs);
            }
        });
}

module.exports = {
    createEntry,
    getEntryById,
    getEntryByRelease,
    getEntryByGenre,
    getAllEntry,
    deleteEntryById,
    updateEntryById
}