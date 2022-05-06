const mongoose = require('mongoose');
const UserSchema = require('../schema/user.schema');
const UserModel = mongoose.model("User", UserSchema);

function createUser(user) {
    return UserModel.create(user);
}

function getUserByUserName(username) {
    //looking for first user that mactches the username given
    return UserModel.findOne({
        username: username
    }).exec();
}

module.exports = {
    createUser,
    getUserByUserName,
}