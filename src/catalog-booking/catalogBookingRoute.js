var catalogBookingMgr = require('./catalogBookingMgr');

module.exports = function (app) {

    app.route('/catalogBooking')        
    .post(catalogBookingMgr.catalogBooking);
}
