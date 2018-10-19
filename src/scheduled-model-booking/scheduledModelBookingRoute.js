var scheduledBookingMgr = require('./scheduledModelBookingMgr');

module.exports = function (app) {

    app.route('/scheduledmodels')       
    .get(scheduledBookingMgr.scheduledModels);

    app.route('/scheduledmodelbooking')
    .post(scheduledBookingMgr.create);
}