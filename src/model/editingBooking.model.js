var mongoose = require('mongoose');

const EditingBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    bookingDate: String,
    productDescription: String,

});

const EditingBookingDetail = mongoose.model('editingBooking', EditingBookingSchema);
module.exports = EditingBookingDetail;