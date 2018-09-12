var BookingDetail = require('../model/booking-detail.model');
var CatalogBooking = require('../model/catalogBooking.model');

exports.catalogBooking = function (req, res, date, bookingOrder) {

    var booking = new BookingDetail(req.body);
    booking.mobileNumber = req.body.mobileNumber;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.location = req.body.location;
    booking.bookingType = 'catalog booking';
    booking.bookingStatus = 0;

    booking.save(
        function (err) {
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
                    function (err, bookingData) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            res.status(200).json(bookingData);
                            console.log(bookingData);
                        }
                    });
            }
        });
};