var mongoose = require('mongoose');

const CatalogBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    emailId: String,
    bookingDate: String,
    productDescription: String,
    bookingDate: String,
   b2bNational: [String],
   b2cNational: [String],
   b2bInterNational: [String],
   b2cInterNational: [String],
   socialMedia: [String]

});

const CatalogBookingDetail = mongoose.model('catalogBooking', CatalogBookingSchema);
module.exports = CatalogBookingDetail;