var mongoose = require('mongoose');

const EditingBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    bookingDate: String,
    imageDescription: String,
    quantityDescription:  String,
    imageRequirements:  String,

});

const EditingBookingDetail = mongoose.model('editingBooking', EditingBookingSchema);
module.exports = EditingBookingDetail;