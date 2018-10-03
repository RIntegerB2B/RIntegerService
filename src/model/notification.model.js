var mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    userSubscriptions: Object,
    mobileNumber: Number,
    user: String
});

const NotificationDetail = mongoose.model('notification', NotificationSchema);
module.exports = NotificationDetail;