'use strict';

 var bookingMgr = require( './booking/bookingMgr');
 var statusMgr = require ('./status/statusMgr');
 var notificationMgr = require ('./notfication/notificationMgr');
 var customerMgr = require('./customer/customerMgr');

 module.exports = function (app) {
   
app.route('/booking')
 .post(bookingMgr.create);

app.route('/subscribe')
.post(notificationMgr.addPushSubscriber);

app.route('/status/:id')        
.get(statusMgr.getStatus);

app.route('/bookingStatus/:no')        
.get(statusMgr.bookingStatus);

app.route('/bookingStatus/:no/view/:id')        
.get(statusMgr.bookingStatusForOne);

app.route('/customer')
.post(customerMgr.create);

app.route('/query')
.post(customerMgr.customerQuery);
     
}
