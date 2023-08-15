const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Task Schema
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isCompleted: {
        type: Boolean
    }
});

// Create & Export Task Model
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;