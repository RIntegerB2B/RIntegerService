var mongoose = require('mongoose');

const CreativeBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    bookingDate: String,
    productDescription: String,

});

const CreativeBookingDetail = mongoose.model('creativeBooking', CreativeBookingSchema);
module.exports = CreativeBookingDetail;