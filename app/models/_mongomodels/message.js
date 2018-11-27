const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({
    fromUser: String,
    toUser: String,
    message : String,
    createdD: Date
});
module.exports = mongoose.model('Message',messageSchema);