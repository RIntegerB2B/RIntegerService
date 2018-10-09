var mongoose = require('mongoose');

const MarketingBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    marketing: String,
    bookingDate: String,
   marketingMedium: [String]

});

const MarketingBookingDetail = mongoose.model('marketingBooking', MarketingBookingSchema);
module.exports = MarketingBookingDetail;