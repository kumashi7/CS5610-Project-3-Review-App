const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,//make sure username is unique
    },
    password: String,
}, {
    collection: 'users',
})

module.exports = UserSchema;