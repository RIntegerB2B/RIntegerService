var mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    mobileNumber: Number,
    bookingId: String,
    bookingDate: String,
    order: Boolean,
    materialPickedUp: Boolean,
    shootCompleted: Boolean,
    imageEditing: Boolean,
    delivery: Boolean,
    payment: Boolean,
    materialReturn: Boolean
});

const Status = mongoose.model('status', StatusSchema);
module.exports = Status;