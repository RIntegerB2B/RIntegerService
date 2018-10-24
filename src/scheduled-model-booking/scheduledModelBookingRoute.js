var scheduledBookingMgr = require('./scheduledModelBookingMgr');

module.exports = function (app) {

    app.route('/scheduledmodels')       
    .get(scheduledBookingMgr.scheduledModels);

    app.route('/scheduledmodelbooking')
    .post(scheduledBookingMgr.create);

    app.route('/schedulednationalmenmodels')        
    .get(scheduledBookingMgr.getNationalMenModels);

    app.route('/schedulednationalwomenmodels')        
    .get(scheduledBookingMgr.getNationalWomenModels);


    app.route('/scheduledinternationalmenmodels')        
    .get(scheduledBookingMgr.getInterNationalMenModels);

    app.route('/scheduledinternationalwomenmodels')        
    .get(scheduledBookingMgr.getInterNationalWomenModels);
}