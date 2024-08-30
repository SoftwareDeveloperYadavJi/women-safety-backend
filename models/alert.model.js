const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    incident: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Incident',
        required: true
    },
    volunteer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    alertType: {
        type: String,
        enum: ['sms', 'push', 'email'],
        required: true
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;
