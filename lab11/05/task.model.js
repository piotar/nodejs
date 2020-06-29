const mongoose = require('mongoose');

module.exports = mongoose.model('tasks', {
    task: String,
    completed: {
        type: Boolean,
        default: false,
    },
    // dodajemy referencje do kolekcji 'users'
    user: {
        ref: 'users',
        type: mongoose.Schema.Types.ObjectId,
    },
});