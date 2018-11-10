var bookingDA = require('./bookingDA');
const webpush = require('web-push');
var zeroFill = require('zero-fill')
var Status = require('../model/status.model');
var BookingDetail = require('../model/booking-detail.model');
const vapidKeys = {
  "publicKey": "BIvwBoUek8ZLiE2HRr_srixb0Qi-Ql6CVBhhhvIuuZ5PMFYrfP0zSkNRrHD-uvIBhJ3_BDmzSFedMzu5ZuaVVRM",
  "privateKey": "WBd3Qq40-zxnCZYzSNhh8kY6dz9tIoRxS_K7wPnMaKc"
};


webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

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
         if (details[0] == null) {
          var bookingOrder = order + orderYear + orderMonth + "0001";
          bookingDA.create(req, res, date, bookingOrder);
        } else {
          var arrayLength = details.length - 1;
        var maxID =details[arrayLength].bookingOrderId.substr(10,4);
          var incOrder = maxID.slice(-4);
          var addZero = zeroFill(4, 1);
          var result = parseInt(incOrder) + parseInt(addZero);
          var results = zeroFill(4, result);
          var bookingOrder = order + orderYear + orderMonth + results;
          bookingDA.create(req, res, date, bookingOrder);
          console.log(bookingOrder);
        }
      }
      
    })
  } catch (error) {
    console.log(error);
  }
};