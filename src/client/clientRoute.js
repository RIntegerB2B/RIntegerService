'use strict';

 var bookingMgr = require( './booking/bookingMgr');
 var statusMgr = require ('./status/statusMgr');

 module.exports = function (app) {
   
app.route('/booking')
        .post(bookingMgr.create);

app.route('/status/:id')        
.get(statusMgr.getStatus);

app.route('/bookingStatus/:no')        
.get(statusMgr.bookingStatus);

app.route('/bookingStatus/:no/view/:id')        
.get(statusMgr.bookingStatusForOne);
     
}
