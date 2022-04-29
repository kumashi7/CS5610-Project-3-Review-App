const mongoose = require('mongoose');
const UserSchema = require('../schema/user.schema');
const UserModel = mongoose.model("User", UserSchema);


function getUserByUserName(username) {
    return UserModel.findOne({username: username}).exec();
}

module.exports = {
    getUserByUserName
}