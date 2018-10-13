var RegistrationSetup = require('../model/registrationSetup.model');
var BookingDetail = require('../model/booking-detail.model');
var RegistrationStatus = require('../model/registrationStatus.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');

exports.registrationAndSetup = function (req, res, date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.location = req.body.location;
    booking.emailId = req.body.emailId;
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
                registration.emailId = req.body.emailId;
                registration.bookingOrderId = bookingOrder;
                registration.bookingDate = date;
                registration.b2bNational = req.body.b2bNational;
                registration.b2cNational = req.body.b2cNational;
                registration.b2bInterNational = req.body.b2bInterNational;
                registration.b2cInterNational = req.body.b2cInterNational;
                registration.socialMedia = req.body.socialMedia;

                registration.save(
                    function (err, registrationBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {

                            var statusDetail = new RegistrationStatus();
                            statusDetail.mobileNumber = req.body.mobileNumber;
                            statusDetail.bookingOrderId = bookingOrder;
                            statusDetail.bookingDate = date;
                            statusDetail.order = 0;
                            statusDetail.documentsRequired = 0;
                            statusDetail.accountCreation = 0;
                            statusDetail.brandRegistration = 0;
                            statusDetail.account_brandVerification = 0;
                            statusDetail.accountActivation = 0;
                            statusDetail.detailsForwarding = 0;
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
                                               /*  console.log('Total subscriptions', subscriptionData); */
                                    
                                                const notificationPayload = {
                                                    "notification": {
                                                        "title": 'New Registration Setup booking',
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