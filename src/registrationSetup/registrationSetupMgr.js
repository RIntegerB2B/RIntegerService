var zeroFill = require('zero-fill')

var registrationDA = require('./registrationSetupDA');
var BookingDetails = require('../model/booking-detail.model');


exports.registrationAndSetup = function (req, res) {
    try {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var date = day + "/" + month + "/" + year;
    
    
        var oYear = year.toString();
        var orderYear = oYear.slice(-2);
        var order = "BOSTC";
        var locale = "en-us";
        var result = currentDate.toLocaleString(locale, {
          month: "long"
        });
        var orderMonth = result.substr(0, 3).toUpperCase();
    
    
        BookingDetails.findOne({}).select().sort('-bookingOrderId').limit(1).exec(function (err, details) {
          if (err) {
            res.status(500).send({
              message: "Some error occurred while retrieving notes."
            });
          } else {
            if( details == null) {
             var bookingOrder =order + orderYear+ orderMonth + "0001";
             registrationDA.registrationAndSetup(req, res, date, bookingOrder);
            } 
            else {
            var maxID = details.bookingOrderId;
            var incOrder = maxID.slice(-4);
            var addZero =zeroFill(4, 1);
            var result = parseInt(incOrder) + parseInt(addZero);
             var results =zeroFill(4,result);
            var bookingOrder = order +orderYear  +orderMonth  + results;
            registrationDA.registrationAndSetup(req, res, date, bookingOrder);
            console.log(bookingOrder);
            }
          }
        });
    } catch (error) {
        console.log(error);
    }
};