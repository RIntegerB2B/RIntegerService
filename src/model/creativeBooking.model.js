var mongoose = require('mongoose');

const CreativeBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    bookingDate: String,
    emailId: String,
    productDescription: String,
    quantityDescription: String,
    shootPurpose: String,
    isVideoShoot: String,
    shootType: String

});

const CreativeBookingDetail = mongoose.model('creativeBooking', CreativeBookingSchema);
module.exports = CreativeBookingDetail;