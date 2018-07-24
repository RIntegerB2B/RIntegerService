'use strict';

 var BookingDetail = require('../../model/booking-detail.model');
 var Status = require('../../model/status.model');

 exports.create = function (req, res,date) {
  var booking = new BookingDetail(req.body);
  booking.mobileNumber = req.body.mobileNumber;
  booking.name = req.body.name;
  booking.shootType = req.body.shootType;
  booking.modelType = req.body.modelType;
  booking.productDescription = req.body.productDescription;
  booking.quantityDescription = req.body.quantityDescription;

  booking.save(
      function (err, bookingData) {
          if (err) { 
              res.status(500).send({
                  "result": "0"
              });
          } else {
            var statusDetail = new Status(req.body);
            statusDetail.mobileNumber = req.body.mobileNumber;
            statusDetail.bookingDate = date;
            statusDetail.order = 0;
            statusDetail.materialPickedUp = 0;
            statusDetail.shootCompleted = 0;
            statusDetail.imageEditing = 0;
            statusDetail.delivery = 0;
            statusDetail.payment = 0;
            statusDetail.materialReturn = 0;
           
            statusDetail.save(
                function (err,statusData) {
                    if (err) { 
                        res.status(500).send({
                            "result": err 
                        });
                    } else {
                     res.status(200).json(statusData)
                 
                      
                    }
                });   
          }
      }); 
};


