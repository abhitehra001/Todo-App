const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("todos", Todo);