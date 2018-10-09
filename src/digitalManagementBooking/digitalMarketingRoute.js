var digitalManagementBookingMgr = require('./digitalManagementMgr');


module.exports = function (app) {

    app.route('/digitalmanagementBooking')        
    .post(digitalManagementBookingMgr.digitalMgmtBooking);
}