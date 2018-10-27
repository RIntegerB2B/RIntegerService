var mongoose = require('mongoose');

const MonthlyPlanSchema = new mongoose.Schema({
    status: String,
    planTitle: String,
    planDescription: String
   
});
module.exports = MonthlyPlanSchema;