var Marketing  = require('../model/marketingBooking.model');
var BookingDetail = require('../model/booking-detail.model');
var Status = require('../model/status.model');

exports.marketingBooking = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.emailId = req.body.emailId;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'Marketing Booking';
    booking.bookingDate = date;  
    booking.bookingStatus = 'Waiting for approval';;// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var marketing = new Marketing();
                marketing.mobileNumber = req.body.mobileNumber;
                marketing.name = req.body.name;
                marketing.location = req.body.location;
                marketing.emailId = req.body.emailId;
                marketing.bookingOrderId = bookingOrder;
                marketing.bookingDate = date;
                marketing.marketingMedium = req.body.marketingMedium;

                marketing.save(
                    function (err, marketingBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            res.status(200).json(marketingBooking);
                        }
                    }
                )

            }
        });
};