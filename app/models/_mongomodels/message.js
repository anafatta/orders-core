const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({
    fromUser: String,
    fromName : String,
    toUser: String,
    toName: String,
    message : String,
    createdD: Date
});
module.exports = mongoose.model('Message',messageSchema);