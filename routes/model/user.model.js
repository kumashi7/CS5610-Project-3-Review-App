const mongoose = require('mongoose');
<<<<<<< HEAD

const UserSchema = require('../schema/user.schema');

const UserModel = mongoose.model("User", UserSchema);

function createUser(user) {
    return UserModel.create(user);
}

function getUserByUserName(username) {
    //looking for first user that mactches the username given
=======
const UserSchema = require('../schema/user.schema');
const UserModel = mongoose.model("User", UserSchema);


function getUserByUserName(username) {
>>>>>>> c4297c2021b865440b2b84a8899340d61dfaed49
    return UserModel.findOne({username: username}).exec();
}

module.exports = {
<<<<<<< HEAD
    createUser,
    getUserByUserName,
=======
    getUserByUserName
>>>>>>> c4297c2021b865440b2b84a8899340d61dfaed49
}