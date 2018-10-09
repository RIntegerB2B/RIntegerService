var itServicesBookingMgr = require('./itServicesBookingMgr');


module.exports = function (app) {

    app.route('/itservicesBooking')        
    .post(itServicesBookingMgr.itBooking);
}