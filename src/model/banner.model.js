var mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    bannerName: String,
    bannerImage: String
});

const BannerModel = mongoose.model('banner', BannerSchema);
module.exports = BannerModel;