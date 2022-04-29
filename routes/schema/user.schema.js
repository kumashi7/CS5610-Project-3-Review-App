const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    roleType: {
        type: String,
        enum: ["GENERAL_USER", "ADMIN"],
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    entries: [{
        entry: {
            type: Schema.Types.ObjectId,
            ref: 'Entry'
        }
    }]
});

module.exports = UserSchema;