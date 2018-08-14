var mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    shootType: [String],
    modelType: [String],
    productType: [String],
    location: String,
    productDescription: String,
    quantityDescription: String,
    bookingType: String,
    modelsName: String,
    modelId: String,
    bookingOrderId: String
});

const BookingDetail = mongoose.model('bookingDetail', BookingSchema);
module.exports = BookingDetail;