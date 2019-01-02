'use strict';

 var adsMgr = require( './adsMgr');
 module.exports = function (app) {
   
    app.route('/ads')
     .get(adsMgr.viewImages);
     
    
 }