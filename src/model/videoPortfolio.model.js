var mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    videoName: String,
    videosUrl: String
});

module.exports = CategorySchema; 