var mongoose = require('mongoose');

const WeeklyPlanSchema = new mongoose.Schema({
    status: String,
    week:String,
    planTitle: String,
    planDescription: String
   
});
module.exports = WeeklyPlanSchema;