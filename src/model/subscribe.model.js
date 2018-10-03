var mongoose = require('mongoose');

const SubscribeSchema = new mongoose.Schema({
    userSubscriptions: Object,
    mobileNumber: Number,
    user: String
});

const SubscribeDetail = mongoose.model('subscribe', SubscribeSchema);
module.exports = SubscribeDetail;