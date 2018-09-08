var modelBookingMgr = require('./model-bookingMgr');

 module.exports = function (app) {

    app.route('/serviceProviders')        
    .get(modelBookingMgr.getServiceProviders);

    //all models
    app.route('/models')       
    .get(modelBookingMgr.allModels); 

    app.route('/modelDetails/:id')         //future use /modelDetails/:id  for serviceprovider models
    .get(modelBookingMgr.getModelDetails); 


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


    app.route('/model/:id')         //model id
    .get(modelBookingMgr.modelDetail);

    app.route('/modelbooking')
     .post(modelBookingMgr.create);
 }
