var Editing = require('../model/editingBooking.model');
var BookingDetail = require('../model/booking-detail.model');
var Status = require('../model/status.model');

exports.editingBooking = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'Editing Booking';
    booking.bookingDate = date;
    booking.bookingStatus = 'Waiting for approval';;// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var editing = new Editing();
                editing.mobileNumber = req.body.mobileNumber;
                editing.name = req.body.name;
                editing.location = req.body.location;
                editing.bookingOrderId = bookingOrder;
                editing.bookingDate = date;
                editing.save(
                    function (err, editingBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            res.status(200).json(editingBooking);
                        }
                    }
                )

            }
        });
};