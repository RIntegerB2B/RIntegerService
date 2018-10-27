var Creative = require('../model/creativeBooking.model');
var BookingDetail = require('../model/booking-detail.model');
var CreativeBookingStatus = require('../model/creativeBookingStatus.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');
var appSetting = require('../config/appSetting');


exports.creativeBooking = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'Creative Booking';
    booking.emailId = req.body.emailId;
    booking.bookingDate = date;   
    booking.bookingStatus = 'Waiting for approval';;// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var creative = new Creative();
                creative.mobileNumber = req.body.mobileNumber;
                creative.name = req.body.name;
                creative.location = req.body.location;
                creative.bookingOrderId = bookingOrder;
                creative.bookingDate = date; 
                creative.emailId = req.body.emailId;
                 creative.productDescription = req.body.productDescription;
                 creative.quantityDescription = req.body.quantityDescription;
                 creative.shootPurpose = req.body.shootPurpose;
                 creative.isVideoShoot = req.body.isVideoShoot; 
                 creative.shootType = req.body.shootType;
                creative.save(
                    function (err, creativeBooking) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            var statusDetail = new CreativeBookingStatus();
                            statusDetail.mobileNumber = req.body.mobileNumber;
                            statusDetail.bookingOrderId = bookingOrder;
                            statusDetail.bookingDate = date;
                            statusDetail.order = 0;
                            statusDetail.materialPickedUp = 0;
                            statusDetail.shootPlanning = 0;
                            statusDetail.shootCompleted = 0;
                            statusDetail.postProductionWork = 0;
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
                                               /*  console.log('Total subscriptions', subscriptionData); */
                                    
                                                const notificationPayload = {
                                                    "notification": {
                                                        "title": 'New Creative booking',
                                                        "body": bookingOrder,
                                                        "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
                                                        "vibrate": [100, 50, 100],
                                                        "data": {
                                                            "url": 'https://rinteger.com/admin/navheader/creativebooking',
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