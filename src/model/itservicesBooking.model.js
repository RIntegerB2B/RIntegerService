var mongoose = require('mongoose');

const ItServicesBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    services: [String],
    bookingDate: String,

});

const ItServicesBookingDetail = mongoose.model('itservicesbooking', ItServicesBookingSchema);
module.exports = ItServicesBookingDetail;