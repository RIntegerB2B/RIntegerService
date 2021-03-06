var mongoose = require('mongoose');
var ShootType = require('./shootType.model');

const CustomerSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    password: String,
    location: String,
    emailId: String,
    bookingType: [String],
    shootType: [String],
    modelType: [String],
    product: [String]

});

const CustomerDetail = mongoose.model('customerDetail', CustomerSchema);
module.exports = CustomerDetail;