var BookingDetail = require('../model/booking-detail.model');
var CatalogBooking = require('../model/catalogBooking.model');
var Status = require('../model/status.model');

exports.catalogBooking = function (req, res, date, bookingOrder) {

    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'Catalog Booking';
    booking.bookingDate = date;
    booking.bookingStatus = 'Waiting for approval';// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var catalogBooking = new CatalogBooking();
                catalogBooking.mobileNumber = req.body.mobileNumber;
                catalogBooking.name = req.body.name;
                catalogBooking.location = req.body.location;
                catalogBooking.productDescription = req.body.productDescription;
                catalogBooking.bookingOrderId = bookingOrder;
                catalogBooking.bookingDate = date;
                catalogBooking.b2bNational = req.body.b2bNational;
                catalogBooking.b2cNational = req.body.b2cNational;
                catalogBooking.b2bInterNational = req.body.b2bInterNational;
                catalogBooking.b2cInterNational = req.body.b2cInterNational;
                catalogBooking.socialMedia = req.body.socialMedia;
                catalogBooking.save(
                    function (err, catalogBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                          
                            res.status(200).json(catalogBooking);
                        }
                    }
                )

            }
        });
};