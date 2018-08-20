var mongoose = require('mongoose');


const ShootTypeSchema = new mongoose.Schema({
    shoot: String,
    modelType: String
   
});
module.exports = ShootTypeSchema;
