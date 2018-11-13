var mongoose = require('mongoose');
var MonthlyPlan = require('./monthlyPlan.model');
var WeeklyPlan = require('./weeklyPlan.model');
var DailyPlan = require('./dailyPlan.model');

const ActivityLogSchema = new mongoose.Schema({
    bookingOrderId: String,
   monthName:String,
   year: String,
   monthlyPlan:[MonthlyPlan],
   weeklyPlan: [WeeklyPlan],
   dailyPlan:[DailyPlan]
});

const ActivityLog = mongoose.model('activitylog', ActivityLogSchema);
module.exports = ActivityLog;


