 var bookingRoutes = require('./booking/bookingRoute');
 var customerRoutes = require('./customer/customerRoute');
 var statusRoutes = require('./status/statusRoute');
 var modelBookingRoutes =  require('./model-booking/model-bookingRoute');

exports.loadRoutes = function (app) {
    
    bookingRoutes(app);
    customerRoutes(app);
    statusRoutes(app);
    modelBookingRoutes(app);
};

