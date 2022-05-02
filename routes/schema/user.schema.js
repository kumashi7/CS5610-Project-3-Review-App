<<<<<<< HEAD
const Schema = require('mongoose').Schema;
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
>>>>>>> c4297c2021b865440b2b84a8899340d61dfaed49

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

// const mongoose = require('mogoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     roleType: {
//         type: String,
//         enum: ["GENERAL_USER", "ADMIN"],
//         required: true
//     },
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     entries: [{
//         entry: {
//             type: Schema.Types.ObjectId,
//             ref: 'Entry'
//         }
//     }]
// });

<<<<<<< HEAD
// module.exports = User = mongoose.module('User', UserSchema);
=======
module.exports = UserSchema;
>>>>>>> c4297c2021b865440b2b84a8899340d61dfaed49
