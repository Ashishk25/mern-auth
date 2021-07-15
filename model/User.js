const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    account: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema);