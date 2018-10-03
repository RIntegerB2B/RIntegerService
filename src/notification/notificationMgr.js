var notificationDA = require('./notificationDA');
const webpush = require('web-push');

 const vapidKeys = {
    "publicKey": "BEe66AvTCe_qowysFNV2QsGWzgEDnUWAJq1ytVSXxtwqjcf0bnc6d5USXmZOnIu6glj1BFcj87jIR5eqF2WJFEY",
    "privateKey": "M75vu-773ly2mBZ3LdaUCzC-A8aK9p4UuNZFEawXXNo"
}; 

/* const vapidKeys = {
    "publicKey": "BKt65eGjjxVC8EDZj-9awfTMKLydA0jxM6mhren6Hz1UBIduWTFEtIXB7thtCN9nnMZlJsvkYqTn7rUKo8mmGxw",
    "privateKey": "NH-bfQ6QTsEE81Gkx4DfP-fpWf80lJm-LhhgwEFI8f4"
}; */


webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
/* exports.bookingStatus = function (req, res) {
    try {
        notificationDA.pushNotification(req, res)

    } catch (error) {
        console.log(error);
    }
} */

exports.pushNotification = function (req, res) {
        notificationDA.pushNotificationToAdmin(req, res);
}

/* exports.addPushSubscriber = function (req, res) {

    const sub = req.body;

    console.log('Received Subscription on the server: ', sub);

    notificationDA.notificationSubscription(req, res);
} */