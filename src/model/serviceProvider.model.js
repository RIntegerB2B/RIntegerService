var mongoose = require('mongoose');
var ModelSchema = require('./model.model');

const ServiceProviderSchema = new mongoose.Schema({
    Id: String,
    userName: String,
    companyName: String,
    emailId: String,
    mobileNumber: Number,
    website: String,
    location: String,
    password: String,
    isActive: Boolean
    
});

const ServiceProviderDetailSchema = mongoose.model('serviceProvider', ServiceProviderSchema);
module.exports = ServiceProviderDetailSchema;