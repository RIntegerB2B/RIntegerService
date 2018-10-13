var mongoose = require('mongoose');


const RegistrationBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    bookingDate: String,
    b2bNational: [String],
    b2bInterNational: [String],
    b2cNational: [String],
    b2cInterNational: [String],
    socialMedia: [String]

});

const RegistrationBookingDetail = mongoose.model('registrationBooking', RegistrationBookingSchema);
module.exports = RegistrationBookingDetail;