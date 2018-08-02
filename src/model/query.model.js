var mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    message: String

});

const Query= mongoose.model('customerQuery', QuerySchema);
module.exports = Query;