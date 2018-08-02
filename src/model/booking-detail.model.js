var mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    shootType: [String],
    modelType: [String],
    productType: [String],
    productDescription: String,
    quantityDescription: String,
});

const BookingDetail = mongoose.model('bookingDetail', BookingSchema);
module.exports = BookingDetail;