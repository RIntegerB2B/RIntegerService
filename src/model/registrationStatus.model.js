var mongoose = require('mongoose');

const RegistrationStatusSchema = new mongoose.Schema({
    mobileNumber: Number,
    bookingOrderId: String,
    bookingDate: String,
    order: Boolean,
    documentsRequired: Number,
    accountCreation: Number,
    brandRegistration: Number,
    account_brandVerification: Number,
    accountActivation: Number,
    detailsForwarding: Number,
    payment: Number
});

const  RegistrationStatus = mongoose.model('registrationbookingstatus', RegistrationStatusSchema);
module.exports =  RegistrationStatus;