const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        default: null
    },
    joinedAt: {
        type: Date,
        required: true,
        default: Date.now
    },    
})

module.exports = mongoose.model("Users", Users)