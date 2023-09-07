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
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

// Create & Export Task Model
module.exports = mongoose.model('Task', TaskSchema);