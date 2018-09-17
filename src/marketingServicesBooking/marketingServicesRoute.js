var marketingServicesMgr = require('./marketingServicesMgr');

module.exports = function (app) {

    app.route('/marketingBooking')        
    .post(marketingServicesMgr.marketingBooking);
}
