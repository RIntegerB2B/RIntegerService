'use strict';

var BookingDetail = require('../model/booking-detail.model');
var Status = require('../model/status.model');
var DirectBooking = require('../model/directBooking.model');

exports.create = function (req, res, date, bookingOrder) {

    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.location = req.body.location;
    booking.bookingType = 'Direct Booking';
    booking.bookingDate = date;
    booking.bookingStatus = 'Waiting for approval'; // waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var directBooking = new DirectBooking();
                directBooking.mobileNumber = req.body.mobileNumber;
                directBooking.name = req.body.name;
                directBooking.bookingDate = date;
                directBooking.bookingOrderId = bookingOrder;
                directBooking.location = req.body.location;
                directBooking.shootType = req.body.shootType;
                directBooking.modelType = req.body.modelType;
                directBooking.productType = req.body.productType;
                directBooking.productDescription = req.body.productDescription;
                directBooking.quantityDescription = req.body.quantityDescription;

                directBooking.save(
                    function (err, directBooking) {
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
                            statusDetail.order = 0;
                            statusDetail.materialPickedUp = 0;
                            statusDetail.shootCompleted = 0;
                            statusDetail.imageEditing = 0;
                            statusDetail.delivery = 0;
                            statusDetail.payment = 0;
                            statusDetail.materialReturn = 0;

                            statusDetail.save(
                                function (err, statusData) {
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
                    }
                )

            }
        });
};


exports.getbookingDetails = function (req, res) {
    BookingDetail.find({
        'bookingOrderId': req.params.id
    }, function (err, bookingStatus) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bookingStatus);
        }
    });
};