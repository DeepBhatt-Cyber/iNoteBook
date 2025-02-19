const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

// user is the name of the collection
const User = mongoose.model('user', UserSchema);
module.exports = User;