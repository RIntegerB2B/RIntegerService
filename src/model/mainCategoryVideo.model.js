var mongoose = require('mongoose');
var Portfolio = require('./videoPortfolio.model');
const MainCategorySchema = new mongoose.Schema({
    mainCategoryName: String,
    category:[Portfolio]
});
module.exports = MainCategorySchema;