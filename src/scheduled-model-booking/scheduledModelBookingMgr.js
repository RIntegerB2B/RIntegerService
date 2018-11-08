var scheduledBookingDA = require('./scheduledModelBookingDA');

var Status = require('../model/status.model');
var BookingDetail = require('../model/booking-detail.model');
var zeroFill = require('zero-fill');

exports.scheduledModels = function (req, res) {

    try {
        scheduledBookingDA.scheduledModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.create = function (req, res) {

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


       BookingDetail.find().select().exec(function (err, details) {
      if(err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else{
         if (details == null) {
          var bookingOrder = order + orderYear + orderMonth + "0001";
          scheduledBookingDA.create(req, res, date, bookingOrder);
        } else {
          var arrayLength = details.length - 1;
        var maxID =details[arrayLength].bookingOrderId.substr(10,4);
          var incOrder = maxID.slice(-4);
          var addZero = zeroFill(4, 1);
          var result = parseInt(incOrder) + parseInt(addZero);
          var results = zeroFill(4, result);
          var bookingOrder = order + orderYear + orderMonth + results;
          scheduledBookingDA.create(req, res, date, bookingOrder);
        }
      }
      
    })

    } catch (error) {
        console.log(error);
    }
};

exports.getNationalMenModels = function (req, res) {
    try {
        scheduledBookingDA.getNationalMenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.getNationalWomenModels = function (req, res) {
    try {
        scheduledBookingDA.getNationalWomenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.getInterNationalMenModels = function (req, res) {
    try {
        scheduledBookingDA.getInterNationalMenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.getInterNationalWomenModels = function (req, res) {
    try {
        scheduledBookingDA.getInterNationalWomenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
