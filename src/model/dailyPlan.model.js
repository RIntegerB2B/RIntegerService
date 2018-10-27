var mongoose = require('mongoose');

const DailyPlanSchema = new mongoose.Schema({
    status: String,
    date:String,
    planTitle: String,
    planDescription: String
   
});
module.exports = DailyPlanSchema;