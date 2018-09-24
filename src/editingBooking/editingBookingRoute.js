var editingBookingMgr = require('./editingBookingMgr');


module.exports = function (app) {

    app.route('/editingBooking')        
    .post(editingBookingMgr.editingBooking);
}