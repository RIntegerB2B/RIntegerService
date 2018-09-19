'use strict';

 var bookingMgr = require( './bookingMgr');
 module.exports = function (app) {
   
    app.route('/booking')
     .post(bookingMgr.create);
     
    
 }