var mongoose = require('mongoose');

const CatalogBookingSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    bookingOrderId: String,
    location: String,
    productDescription: String,
    bookingDate: Date,
   b2bNational: [String],
   b2cNational: [String],
   b2bInterNational: [String],
   b2cInterNational: [String],
   socialMedia: [String]

});

const CatalogBookingDetail = mongoose.model('catalogBooking', CatalogBookingSchema);
module.exports = CatalogBookingDetail;