const mongoose = require('mongoose')

const invitationSchema = mongoose.Schema({
    name: String,
    address: String,
    status: String
});

module.exports = mongoose.model('invitations', invitationSchema);