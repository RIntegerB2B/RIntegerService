var mongoose = require('mongoose');

const EditingStatusSchema = new mongoose.Schema({
    mobileNumber: Number,
    bookingOrderId: String,
    bookingDate: String,
    order: Boolean,
   imageReceived: Number,
   editing: Number,
   imageDelivery: Number,
   payment: Number
});

const EditingStatus = mongoose.model('editingstatus', EditingStatusSchema);
module.exports = EditingStatus;