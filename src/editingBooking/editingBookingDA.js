var Editing = require('../model/editingBooking.model');
var BookingDetail = require('../model/booking-detail.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');
var EditingStatus = require('../model/editingStatus.model');
var appSetting = require('../config/appSetting');

exports.editingBooking = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.emailId = req.body.emailId;
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
                editing.emailId = req.body.emailId;
                editing.bookingOrderId = bookingOrder;
                editing.bookingDate = date;
                editing.imageDescription = req.body.imageDescription;
                editing.quantityDescription = req.body.quantityDescription;
                editing.imageRequirements = req.body.imageRequirements;
                editing.save(
                    function (err, editingBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            var statusDetail = new EditingStatus();
                            statusDetail.bookingId = bookingData.id.toString();
                            statusDetail.mobileNumber = req.body.mobileNumber;
                            statusDetail.bookingOrderId = bookingOrder;
                            statusDetail.bookingDate = date;
                            statusDetail.order = 0;
                            statusDetail.imageReceived = 0;
                            statusDetail.editing = 0;
                            statusDetail.imageEditing = 0;
                            statusDetail.imageDelivery = 0;
                            statusDetail.payment = 0;
                            statusDetail.save(function (err, status) {
                                if (err) {
                                    console.log(err)
                                } else {
                                    SubscribeDetail.find({
                                        'user': 'serviceProvider'
                                    }, function (err, subscriptionData) {
                                        if (err) {
                                            res.status(500).send({
                                                message: "Some error occurred while retrieving notes."
                                            });
                                        } else {
                                            console.log('Total subscriptions', subscriptionData);
                                
                                            const notificationPayload = {
                                                "notification": {
                                                    "title": 'New Image Editing booking',
                                                    "body": bookingOrder,
                                                    "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
                                                    "vibrate": [100, 50, 100],
                                                    "data": {
                                                        "url": 'https://rinteger.com/admin/navheader/imageeditingbooking',
                                                        "dateOfArrival": Date.now(),
                                                        "primaryKey": 1
                                                    }
                                                }
                                            };
                                            Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                                                    sub.userSubscriptions, JSON.stringify(notificationPayload))))
                                                .then(() => res.status(200).json(editingBooking))
                                                .catch(err => {
                                                    console.error("Error sending notification, reason: ", err);
                                                    res.sendStatus(500);
                                                });
                                        }
                                    });
                                    res.status(200).json(editingBooking);
                                }
                            })

                            
                        }
                    }
                )

            }
        });
};