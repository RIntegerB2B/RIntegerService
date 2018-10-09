var mongoose = require('mongoose');

const ModelBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    productDescription: String,
    quantityDescription: String,
    modelsName: String,
    modelId: String,
});

const ModelBooking = mongoose.model('modelBooking', ModelBookingSchema);
module.exports = ModelBooking;