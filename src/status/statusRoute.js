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

app.route('/bookingDetails/:id/active')        
.get(statusMgr.activeBookings);


app.route('/bookingDetails/:id/cancelled')        
.get(statusMgr.cancelBookings);

app.route('/bookingDetails/:id/completed')        
.get(statusMgr.completedBookings);

app.route('/order/:id/completed')        
.get(statusMgr.completedOrder);

//editing status
app.route('/editingStatus/:id')        
.get(statusMgr.editingBookingStatus);

// catalog status
app.route('/catalogStatus/:id')        
.get(statusMgr.catalogBookingStatus);


// creative status
app.route('/creativeStatus/:id')        
.get(statusMgr.creativeBookingStatus);

// regsitration status
app.route('/registrationStatus/:id')        
.get(statusMgr.registrationBookingStatus);

// aplus status
app.route('/aplusStatus/:id')        
.get(statusMgr.aplusBookingStatus);

// accoint -mgmt booking customer register

app.route('/register')
.post(statusMgr.register);

app.route('/signin')
.post(statusMgr.signin);


// account-mgmt status
app.route('/accountmgmtstatus/:id')        
.get(statusMgr.accountMgmtStatus);
}