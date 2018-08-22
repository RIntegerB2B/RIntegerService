var mongoose = require('mongoose');
var ShootType = require('./shootType.model');

const CustomerSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    location: String,
    shootType: [String],
    modelType: [String],
    product: [String]

});

const CustomerDetail = mongoose.model('customerDetail', CustomerSchema);
module.exports = CustomerDetail;