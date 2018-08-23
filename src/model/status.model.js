var mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    mobileNumber: Number,
    bookingId: String,
    bookingOrderId: String,
    bookingDate: String,
    order: Boolean,
    materialPickedUp: Number,
    shootCompleted: Number,
    imageEditing: Number,
    delivery: Number,
    payment: Number,
    materialReturn: Number
});

const Status = mongoose.model('status', StatusSchema);
module.exports = Status;