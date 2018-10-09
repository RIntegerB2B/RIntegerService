var mongoose = require('mongoose');

const AplusBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    bookingDate: String,
    productDescription: String,
    quantityDescription: String,
    isAudioShoot: String,
    isVideoShoot: String,

});

const AplusBookingDetail = mongoose.model('aplusBooking', AplusBookingSchema);
module.exports = AplusBookingDetail;