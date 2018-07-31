var mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    userSubscriptions: Array,
    mobileNumber: Number
});

const NotificationDetail = mongoose.model('notification', NotificationSchema);
module.exports = NotificationDetail;