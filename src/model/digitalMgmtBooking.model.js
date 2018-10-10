var mongoose = require('mongoose');

const DigitalMgmtBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    bookingDate: String,
    productDescription: String,
    bookingDate: String,
   website: String,
   b2bNational: [String],
   b2cNational: [String],
   b2bInterNational: [String],
   b2cInterNational: [String],
   socialMedia: [String]

});

const DigitalMgmtBookingDetail = mongoose.model('digitalmanagementBooking', DigitalMgmtBookingSchema);
module.exports = DigitalMgmtBookingDetail;