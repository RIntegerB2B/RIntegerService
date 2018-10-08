var mongoose = require('mongoose');

const AplusStatusSchema = new mongoose.Schema({
    mobileNumber: Number,
    bookingOrderId: String,
    bookingDate: String,
    order: Boolean,
    materialPickedUp: Number,
    shootPlanning: Number,
    shootCompleted: Number,
    postProductionWork: Number,
    productDetailsReceived: Number,
    loginCredentialsReceived: Number,
    catalogContentMaking: Number,
    catalogUploaded: Number,
    qc_processing: Number,
    inventoryUpdation: Number,
    productLive: Number,
    payment: Number,
    materialReturn: Number
});

const AplusStatus = mongoose.model('aplusbookingstatus', AplusStatusSchema);
module.exports = AplusStatus;