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


    app.route('/projectionmodels')       
    .get(scheduledBookingMgr.projectionModels);

  

    app.route('/projectionnationalmen')        
    .get(scheduledBookingMgr.projectionNationalMenModels);

    app.route('/projectionnationalwomen')        
    .get(scheduledBookingMgr.projectionNationalWomenModels);


    app.route('/projectioninternationalmen')        
    .get(scheduledBookingMgr.projectionInterNationalMenModels);

    app.route('/projectioninternationalwomen')        
    .get(scheduledBookingMgr.projectionInterNationalWomenModels);
}