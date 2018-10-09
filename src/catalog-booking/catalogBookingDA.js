var BookingDetail = require('../model/booking-detail.model');
var CatalogBooking = require('../model/catalogBooking.model');
var CatalogingStatus = require('../model/catalogBookingStatus.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');

exports.catalogBooking = function (req, res, date, bookingOrder) {

    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.emailId = req.body.emailId;
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
                catalogBooking.emailId = req.body.emailId;
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
                          
                            var statusDetail = new CatalogingStatus();
                            statusDetail.mobileNumber = req.body.mobileNumber;
                            statusDetail.bookingOrderId = bookingOrder;
                            statusDetail.bookingDate = date;
                            statusDetail.order = 0;
                            statusDetail.imageReceived = 0;
                            statusDetail.productDetailsReceived = 0;
                            statusDetail.loginCredentialsReceived = 0;
                            statusDetail.catalogContentMaking = 0;
                            statusDetail.catalogUploaded = 0; 
                            statusDetail.qc_processing = 0;
                            statusDetail.inventoryUpdation = 0;
                            statusDetail.productLive = 0;
                            statusDetail.payment = 0;
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
                                              /*   console.log('Total subscriptions', subscriptionData); */
                                    
                                                const notificationPayload = {
                                                    "notification": {
                                                        "title": 'New Cataloging Booking',
                                                        "body": bookingOrder,
                                                        "icon": "assets/main-page-logo-small-hat.png",
                                                        "vibrate": [100, 50, 100],
                                                        "data": {
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