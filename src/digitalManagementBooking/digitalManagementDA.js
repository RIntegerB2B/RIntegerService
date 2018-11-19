var DigitalMgmt = require('../model/digitalMgmtBooking.model');
var BookingDetail = require('../model/booking-detail.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');
var appSetting = require('../config/appSetting');

exports.digitalMgmtBooking = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.emailId = req.body.emailId;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'Account Management Booking';
    booking.bookingDate = date;
    booking.bookingStatus = 'Waiting for approval';;// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var digitalMgmt = new DigitalMgmt();
                digitalMgmt.mobileNumber = req.body.mobileNumber;
                digitalMgmt.name = req.body.name;
                digitalMgmt.location = req.body.location;
                digitalMgmt.emailId = req.body.emailId;
                digitalMgmt.bookingOrderId = bookingOrder;
                digitalMgmt.bookingDate = date;
                digitalMgmt.website = req.body.website;
                digitalMgmt.b2bNational = req.body.b2bNational;
                digitalMgmt.b2cNational = req.body.b2cNational;
                digitalMgmt.b2bInterNational = req.body.b2bInterNational;
                digitalMgmt.b2cInterNational = req.body.b2cInterNational;
                digitalMgmt.socialMedia = req.body.socialMedia;
                digitalMgmt.save(
                    function (err, digitalMgmtBooking) {
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
                                            "title": 'New Account Management Booking',
                                            "body": bookingOrder,
                                            "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
                                            "vibrate": [100, 50, 100],
                                            "data": {
                                                "url": 'https://rinteger.com/admin/navheader/digitalmgmtbooking',
                                                "dateOfArrival": Date.now(),
                                                "primaryKey": 1
                                            }
                                        }
                                    };
                                    Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                                            sub.userSubscriptions, JSON.stringify(notificationPayload))))
                                        .then(() => res.status(200).json(digitalMgmtBooking))
                                        .catch(err => {
                                            console.error("Error sending notification, reason: ", err);
                                            res.sendStatus(500);
                                        });
                                }
                            });
                            res.status(200).json(digitalMgmtBooking);
                            
                        }
                    }
                )

            }
        });
};