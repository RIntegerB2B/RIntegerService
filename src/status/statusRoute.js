var statusMgr = require ('./statusMgr');

module.exports = function (app) {
    app.route('/status/:id')        
.get(statusMgr.getStatus);

app.route('/bookingStatus/:no')        
.get(statusMgr.bookingStatus);

app.route('/bookStatus/:no')        
.get(statusMgr.bookStatus);

app.route('/bookingStatus/:no/view/:id')        
.get(statusMgr.bookingStatusForOne);

app.route('/bookingDetails/:id/view/:type')        
.get(statusMgr.getbookingDetails);

/* app.route('/bookingDetails/:id/active')        
.get(statusMgr.activeBookings);


app.route('/bookingDetails/:id/cancelled')        
.get(statusMgr.cancelBookings); */
}