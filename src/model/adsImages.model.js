var mongoose = require('mongoose');

const ADSchema = new mongoose.Schema({
    position: String,
    adImageName: String
});

const ADModel = mongoose.model('adsImages', ADSchema);
module.exports = ADModel;