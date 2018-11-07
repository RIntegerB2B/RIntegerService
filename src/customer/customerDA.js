'use strict';

var CustomerDetail = require('../model/customer-detail.model');
var Query = require('../model/query.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');
var appSetting = require('../config/appSetting');

exports.create = function (req, res) {

    CustomerDetail.findOne({
        'mobileNumber': req.body.mobileNumber
    }, function (err, customerDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (customerDetail == null) {
                var customer = new CustomerDetail(req.body);
                customer.mobileNumber = req.body.mobileNumber;
                customer.location = req.body.location;
                customer.emailId = req.body.emailId;
                customer.name = req.body.name;
                customer.bookingType.push = req.body.bookingType;
                customer.shootType.push = req.body.shootType;
                customer.modelType.push = req.body.modelType;
                customer.product.push = req.body.product;
                customer.save(
                    function (err, customerData) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            res.status(200).json(customerData)
                        }
                    });
            } else if (customerDetail != null) {
                CustomerDetail.findOneAndUpdate({
                        'mobileNumber': req.body.mobileNumber
                    }, {
                        $push: {
                            shootType: req.body.shootType,
                            modelType: req.body.modelType,
                            product: req.body.product,
                            bookingType: req.body.bookingType
                        }
                    },
                    function (err, customerData) {
                        if (err) { // if it contains error return 0
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            res.status(200).json(customerData)
                        }
                    })
            }

        }
    });

};

exports.customerQuery = function (req, res) {
    var query = new Query(req.body);
    query.mobileNumber = req.body.mobileNumber;
    query.message = req.body.message;
    query.emailId = req.body.emailId;
    query.name = req.body.name;
    query.isHandled = 0;
    query.save(
        function (err, queryData) {
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
                                "title": 'New Contact Request',
                                "body":  req.body.mobileNumber,
                                "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
                                "vibrate": [100, 50, 100],
                                "data": {
                                    "url": 'https://rinteger.com/admin/navheader/contact',
                                    "dateOfArrival": Date.now(),
                                    "primaryKey": 1
                                }
                            }
                        };
                        Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                                sub.userSubscriptions, JSON.stringify(notificationPayload))))
                            .then(() => res.status(200).json(queryData))
                            .catch(err => {
                                console.error("Error sending notification, reason: ", err);
                                res.sendStatus(500);
                            });
                    }
                });
            }
        });
};