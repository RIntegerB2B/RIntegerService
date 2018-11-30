var mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryName: String,
    categoryPosition: Number,
    primeImage: String,
    images: [String]
});

module.exports = CategorySchema; 