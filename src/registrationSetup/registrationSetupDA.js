var RegistrationSetup  = require('../model/registrationSetup.model');
var BookingDetail = require('../model/booking-detail.model');
var Status = require('../model/status.model');

exports.registrationAndSetup = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.location = req.body.location;
    booking.bookingDate = date;
    booking.bookingType = 'Registration Booking';
    booking.bookingStatus = 'Waiting for approval';


    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var registration = new RegistrationSetup();
                registration.mobileNumber = req.body.mobileNumber;
                registration.name = req.body.name;
                registration.location = req.body.location;
                registration.bookingOrderId = bookingOrder;
                registration.bookingDate = date;
                registration.b2b = req.body.b2b;
                registration.b2c= req.body.b2c;
                registration.socialMedia = req.body.socialMedia;

                registration.save(
                    function (err, registrationBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            var statusDetail = new Status();
                            statusDetail.bookingId = bookingData.id.toString();
                            statusDetail.mobileNumber = req.body.mobileNumber;
                            statusDetail.bookingOrderId = bookingOrder;
                            statusDetail.bookingDate = date;
                            // add the status 
                           /*  statusDetail.order = 0;
                            statusDetail.materialPickedUp = 0;
                            statusDetail.shootCompleted = 0;
                            statusDetail.imageEditing = 0;
                            statusDetail.delivery = 0;
                            statusDetail.payment = 0;
                            statusDetail.materialReturn = 0; */

                            statusDetail.save(
                                function (err, statusData) {
                                    if (err) {
                                        res.status(500).send({
                                            "result": err
                                        });
                                    } else {
                                        res.status(200).json(bookingData);
                                    }
                                });
                        }
                    }
                )

            }
        });
};