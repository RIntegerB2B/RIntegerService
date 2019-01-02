var mongoose = require('mongoose');
var MainCategoryVideo = require('./mainCategoryVideo.model');

const SuperCategorySchema = new mongoose.Schema({
    
    categoryName: String,
    mainCategory:[MainCategoryVideo]
});

const Category = mongoose.model('videoportfolio', SuperCategorySchema);
module.exports = Category;


