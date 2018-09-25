var Creative = require('../model/creativeBooking.model');
var BookingDetail = require('../model/booking-detail.model');
var Status = require('../model/status.model');

exports.creativeBooking = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'Creative Booking';
    booking.bookingDate = date;
    booking.bookingStatus = 'Waiting for approval';;// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var creative = new Creative();
                creative.mobileNumber = req.body.mobileNumber;
                creative.name = req.body.name;
                creative.location = req.body.location;
                creative.bookingOrderId = bookingOrder;
                creative.bookingDate = date; 
                 creative.productDescription = req.body.productDescription;
                 creative.quantityDescription = req.body.quantityDescription;
                 creative.shootPurpose = req.body.shootPurpose;
                 creative.isVideoShoot = req.body.isVideoShoot; 
                 creative.shootType = req.body.shootType;
                creative.save(
                    function (err, creativeBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            res.status(200).json(creativeBooking);
                        }
                    }
                )

            }
        });
};