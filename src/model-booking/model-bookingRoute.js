var modelBookingMgr = require('./model-bookingMgr');

 module.exports = function (app) {

   /*  app.route('/serviceProviders')        
    .get(modelBookingMgr.getServiceProviders);
 */
    app.route('/modelDetails')        
    .get(modelBookingMgr.getModelDetails); //future use /modelDetails/:id  for serviceprovider models

   /*  app.route('/menmodels')        
    .get(modelBookingMgr.getMenModels);

    app.route('/womenmodels')        
    .get(modelBookingMgr.getWomenModels);
 */
    app.route('/nationalmenmodels')        
    .get(modelBookingMgr.getNationalMenModels);

    app.route('/nationalwomenmodels')        
    .get(modelBookingMgr.getNationalWomenModels);


    app.route('/internationalmenmodels')        
    .get(modelBookingMgr.getInterNationalMenModels);

    app.route('/internationalwomenmodels')        
    .get(modelBookingMgr.getInterNationalWomenModels);


    app.route('/modelDetails/:id')        
    .get(modelBookingMgr.modelDetail);

    app.route('/modelbooking')
     .post(modelBookingMgr.create);
 }
