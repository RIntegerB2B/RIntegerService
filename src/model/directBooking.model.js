var mongoose = require('mongoose');

const DirectBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    shootType: [String],
    modelType: [String],
    productType: [String],
    productDescription: String,
    quantityDescription: String,
    bookingDate: String
});

const DirectBooking = mongoose.model('directBooking', DirectBookingSchema);
module.exports = DirectBooking;