var mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    bookingType: String,
    emailId: String,
    shootType: [String],
    modelType: [String],
    productType: [String],
    location: String,
    /* productDescription: String,
    quantityDescription: String, */
    modelsName: String,
    modelId: String,
    bookingStatus: String,
    bookingDate: String
});

const BookingDetail = mongoose.model('bookingDetail', BookingSchema);
module.exports = BookingDetail;