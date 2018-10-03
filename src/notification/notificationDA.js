var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');

exports.pushNotificationToAdmin = function (req, res) {
   /*  var SubscribeDetail = new SubscribeDetail(req.body); */
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
                    "title": 'model booking',
                    "body": 'test',
                    "icon": "assets/rinteger.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    }
                }
            };
            Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                    sub.userSubscriptions, JSON.stringify(notificationPayload))))
                .then(() => res.status(200).json({
                    message: 'Push Notificatoin Successfull.'
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
        }
    });
};
