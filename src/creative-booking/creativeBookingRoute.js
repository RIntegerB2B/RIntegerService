var creativeBookingMgr = require('./creativeBookingMgr');


module.exports = function (app) {

    app.route('/creativeBooking')        
    .post(creativeBookingMgr.creativeBooking);
}