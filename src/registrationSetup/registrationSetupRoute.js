var registrationSetupMgr = require('./registrationSetupMgr');

module.exports = function (app) {

    app.route('/registrationBooking')        
    .post(registrationSetupMgr.registrationAndSetup);
}
