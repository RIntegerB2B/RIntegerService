var mongoose = require('mongoose');

const CreativeStatusSchema = new mongoose.Schema({
    mobileNumber: Number,
    bookingOrderId: String,
    bookingDate: String,
    order: Boolean,
    materialPickedUp: Number,
    shootPlanning: Number,
    shootCompleted: Number,
    postProductionWork: Number,
    payment: Number,
    materialReturn: Number
});

const CreativeStatus = mongoose.model('creativebookingstatus', CreativeStatusSchema);
module.exports = CreativeStatus;