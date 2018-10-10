 var bookingRoutes = require('./booking/bookingRoute');
 var customerRoutes = require('./customer/customerRoute');
 var statusRoutes = require('./status/statusRoute');
 var modelBookingRoutes =  require('./model-booking/model-bookingRoute');
 var catalogBookingRoutes = require('./catalog-booking/catalogBookingRoute');
 var registrationSetupRoutes = require('./registrationSetup/registrationSetupRoute');
 var marketingRoutes = require('./marketingServicesBooking/marketingServicesRoute');
 var editingRoutes = require('./editingBooking/editingBookingRoute');
 var creativeRoutes = require('./creative-booking/creativeBookingRoute');
 var notificationRoutes = require('./notification/notificationRoute');
 var aplusRoutes = require('./aplus-booking/aplusBookingRoute');
 var itRoutes = require('./itServicesBooking/itServicesBookingRoute');
 var digitalmgmtRoutes = require('./digitalManagementBooking/digitalMarketingRoute');

exports.loadRoutes = function (app) {
    
    bookingRoutes(app);
    customerRoutes(app);
    statusRoutes(app);
    modelBookingRoutes(app);
    catalogBookingRoutes(app);
    registrationSetupRoutes(app);
    marketingRoutes(app);
    editingRoutes(app);
    creativeRoutes(app);
    aplusRoutes(app);
    itRoutes(app);
    digitalmgmtRoutes(app);
   /*  notificationRoutes(app); */
};

