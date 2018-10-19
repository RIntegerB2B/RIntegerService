var mongoose = require('mongoose');

const ScheduledModelBookingSchema = new mongoose.Schema({
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

const ScheduledModelBooking = mongoose.model('scheduledmodelBooking', ScheduledModelBookingSchema);
module.exports = ScheduledModelBooking;