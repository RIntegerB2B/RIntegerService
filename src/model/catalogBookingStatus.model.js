var mongoose = require('mongoose');

const CatalogStatusSchema = new mongoose.Schema({
    mobileNumber: Number,
    bookingOrderId: String,
    bookingDate: String,
    order: Boolean,
    imageReceived: Number,
    productDetailsReceived: Number,
    loginCredentialsReceived: Number,
    catalogContentMaking: Number,
    catalogUplooaded: Number,
    qc_processing: Number,
    inventoryUpdation: Number,
    productLive: Number
});

const CatalogStatus = mongoose.model('catalogbookingstatus', CatalogStatusSchema);
module.exports = CatalogStatus;