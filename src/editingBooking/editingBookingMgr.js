var zeroFill = require('zero-fill')

var editingDA = require('./editingBookingDA');
var BookingDetails = require('../model/booking-detail.model');

exports.editingBooking = function (req, res) {
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
    
    
        BookingDetails.find().select().exec(function (err, details) {
          if(err) {
            res.status(500).send({
              message: "Some error occurred while retrieving notes."
            });
          } else{
             if (details == null) {
              var bookingOrder = order + orderYear + orderMonth + "0001";
              editingDA.editingBooking(req, res, date, bookingOrder);
            } else {
              var arrayLength = details.length - 1;
            var maxID =details[arrayLength].bookingOrderId.substr(10,4);
              var incOrder = maxID.slice(-4);
              var addZero = zeroFill(4, 1);
              var result = parseInt(incOrder) + parseInt(addZero);
              var results = zeroFill(4, result);
              var bookingOrder = order + orderYear + orderMonth + results;
              editingDA.editingBooking(req, res, date, bookingOrder);
            }
          }
          
        })
    } catch (error) {
        console.log(error);
    }
};