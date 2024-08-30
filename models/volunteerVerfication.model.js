const mongoose = require('mongoose');

const volunteerVerificationSchema = new mongoose.Schema({
    volunteer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    verificationDocuments: [String],
    verifiedAt: {
        type: Date
    }
});

const VolunteerVerification = mongoose.model('VolunteerVerification', volunteerVerificationSchema);

module.exports = VolunteerVerification;
