var mongoose = require('mongoose');
var MonthlyPlan = require('./monthlyPlan.model');
var WeeklyPlan = require('./weeklyPlan.model');
var DailyPlan = require('./dailyPlan.model');

const DigitalMgmtStatusSchema = new mongoose.Schema({
    bookingOrderId: String,
   monthName:String,
   year: String,
   monthlyPlan:[MonthlyPlan],
   weeklyPlan: [WeeklyPlan],
   dailyPlan:[DailyPlan]
});

const DigitalMgmtStatus = mongoose.model('digitalmgmtstatus', DigitalMgmtStatusSchema);
module.exports = DigitalMgmtStatus;