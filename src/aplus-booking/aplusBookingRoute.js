'use strict';

 var aplusBookingMgr = require( './aplusBookingMgr');
 module.exports = function (app) {
   
    app.route('/aplusbooking')
     .post(aplusBookingMgr.aplusBooking);
     
    
 }