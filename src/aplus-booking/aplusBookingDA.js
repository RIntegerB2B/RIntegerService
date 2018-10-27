var BookingDetail = require('../model/booking-detail.model');
var AplusBooking = require('../model/aplusBooking.model');
var AplusStatus = require('../model/aplusBookingStatus.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');
var appSetting = require('../config/appSetting');

exports.aplusBooking = function (req, res, date, bookingOrder) {

    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'A+ Cataloging Booking';
    booking.emailId = req.body.emailId;
    booking.bookingDate = date;
    booking.bookingStatus = 'Waiting for approval';// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var aplusBooking = new AplusBooking();
                aplusBooking.mobileNumber = req.body.mobileNumber;
                aplusBooking.name = req.body.name;
                aplusBooking.location = req.body.location;
                aplusBooking.productDescription = req.body.productDescription;
                aplusBooking.bookingOrderId = bookingOrder;
                aplusBooking.bookingDate = date;
                aplusBooking.emailId = req.body.emailId;
                aplusBooking.productDescription = req.body.productDescription;
                aplusBooking.quantityDescription = req.body.quantityDescription;
                aplusBooking.isPhotoShoot = req.body.isPhotoShoot;
                aplusBooking.isVideoShoot = req.body.isVideoShoot;
                aplusBooking.save(
                    function (err, aplusBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                          
                            var statusDetail = new AplusStatus();
                            statusDetail.mobileNumber = req.body.mobileNumber;
                            statusDetail.bookingOrderId = bookingOrder;
                            statusDetail.bookingDate = date;
                            statusDetail.order = 0;
                            statusDetail.materialPickedUp = 0;
                            statusDetail.shootPlanning = 0;
                            statusDetail.shootCompleted = 0;
                            statusDetail.postProductionWork = 0;
                            statusDetail.productDetailsReceived = 0;
                            statusDetail.loginCredentialsReceived = 0;
                            statusDetail.catalogContentMaking = 0;
                            statusDetail.catalogUploaded = 0; 
                            statusDetail.qc_processing = 0;
                            statusDetail.inventoryUpdation = 0;
                            statusDetail.productLive = 0;
                            statusDetail.payment = 0;
                            statusDetail.materialReturn = 0;
                            statusDetail.save(
                                function (err, statusData) {
                                    if (err) {
                                        res.status(500).send({
                                            "result": err
                                        });
                                    } else {
                                        SubscribeDetail.find({
                                            'user': 'serviceProvider'
                                        }, function (err, subscriptionData) {
                                            if (err) {
                                                res.status(500).send({
                                                    message: "Some error occurred while retrieving notes."
                                                });
                                            } else {
                                                /* console.log('Total subscriptions', subscriptionData); */
                                    
                                                const notificationPayload = {
                                                    "notification": {
                                                        "title": 'New A+ Cataloging Booking',
                                                        "body": bookingOrder,
                                                        "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
                                                        "vibrate": [100, 50, 100],
                                                        "data": {
                                                            "url": 'https://rinteger.com/admin/navheader/aplusbooking',
                                                            "dateOfArrival": Date.now(),
                                                            "primaryKey": 1
                                                        }
                                                    }
                                                };
                                                Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                                                        sub.userSubscriptions, JSON.stringify(notificationPayload))))
                                                    .then(() => res.status(200).json(bookingData))
                                                    .catch(err => {
                                                        console.error("Error sending notification, reason: ", err);
                                                        res.sendStatus(500);
                                                    });
                                            }
                                        });
                                    }
                                });
                        }
                    }
                )

            }
        });
};