var ITServices = require('../model/itservicesBooking.model');
var BookingDetail = require('../model/booking-detail.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');
var appSetting = require('../config/appSetting');

exports.itBooking = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.emailId = req.body.emailId;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'IT Services Booking';
    booking.bookingDate = date;
    booking.bookingStatus = 'Waiting for approval';;// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var itServices = new ITServices();
                itServices.mobileNumber = req.body.mobileNumber;
                itServices.name = req.body.name;
                itServices.location = req.body.location;
                itServices.emailId = req.body.emailId;
                itServices.bookingOrderId = bookingOrder;
                itServices.bookingDate = date;
                itServices.services = req.body.services;
                itServices.save(
                    function (err, itServicesBooking) {
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
                                   /*  console.log('Total subscriptions', subscriptionData); */
                        
                                    const notificationPayload = {
                                        "notification": {
                                            "title": 'New  It Services booking',
                                            "body": bookingOrder,
                                            "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
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
                    }
                )

            }
        });
};