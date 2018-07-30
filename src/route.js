 var clientRoutes = require('./client/clientRoute');

exports.loadRoutes = function (app) {
    
    clientRoutes(app);
};

