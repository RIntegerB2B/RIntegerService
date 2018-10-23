var Marketing  = require('../model/marketingBooking.model');
var BookingDetail = require('../model/booking-detail.model');
var Status = require('../model/status.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');

exports.marketingBooking = function (req, res,date, bookingOrder) {
    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.location = req.body.location;
    booking.name = req.body.name;
    booking.emailId = req.body.emailId;
    booking.bookingOrderId = bookingOrder;
    booking.bookingType = 'Marketing Booking';
    booking.bookingDate = date;  
    booking.bookingStatus = 'Waiting for approval';;// waiting for approval

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {
                var marketing = new Marketing();
                marketing.mobileNumber = req.body.mobileNumber;
                marketing.name = req.body.name;
                marketing.location = req.body.location;
                marketing.emailId = req.body.emailId;
                marketing.bookingOrderId = bookingOrder;
                marketing.bookingDate = date;
                marketing.marketingMedium = req.body.marketingMedium;

                marketing.save(
                    function (err, marketingBooking) {
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
                                            "title": 'New Marketing Services booking',
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
                            /* res.status(200).json(marketingBooking); */
                        }
                    }
                )

            }
        });
};