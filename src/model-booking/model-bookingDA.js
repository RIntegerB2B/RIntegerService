'use strict';

var ModelDetail = require('../model/model.model');
var appSetting = require('../config/appSetting');
var ServiceProvider = require('../model/serviceProvider.model');
var Status = require('../model/status.model');
var BookingDetail = require('../model/booking-detail.model');
var ModelBooking = require('../model/modelBooking.model');
var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');
var appSetting = require('../config/appSetting');

exports.allModels = function (req, res) {

    ModelDetail.find({'availability':'Yes'
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                var ecomLength = models[i].ecommerceImageName.length - 1;

                for (var j = 0; j <= ecomLength; j++) {
                    models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].ecommerceImageName[j];
                }
                var prodLength = models[i].productImageName.length - 1;
                for (var j = 0; j <= prodLength; j++) {
                    models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].productImageName[j];
                }
                var portLength = models[i].productImageName.length - 1;
                for (var k = 0; k <= portLength; k++) {
                    models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portraitImageName[k];
                }
                var portfolioLength = models[i].productImageName.length - 1;
                for (var l = 0; l <= portLength; l++) {
                    models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portFolioImageName[l];
                }
            }
            res.status(200).json(models);
        }
    });
};

exports.modelDetail = function (req, res) {

    ModelDetail.find({
        '_id': req.params.id
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                var ecomLength = models[i].ecommerceImageName.length - 1;

                for (var j = 0; j <= ecomLength; j++) {
                    models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].ecommerceImageName[j];
                }
                var prodLength = models[i].productImageName.length - 1;
                for (var j = 0; j <= prodLength; j++) {
                    models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].productImageName[j];
                }
                var portLength = models[i].productImageName.length - 1;
                for (var k = 0; k <= portLength; k++) {
                    models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portraitImageName[k];
                }
                var portfolioLength = models[i].portFolioImageName.length - 1;
                for (var l = 0; l <= portfolioLength; l++) {
                    models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portFolioImageName[l];
                }
            }

            res.status(200).json(models);
        }
    });
};

exports.getMenModels = function (req, res) {

    ModelDetail.find({
        'categoryType': 'Men'
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                var ecomLength = models[i].ecommerceImageName.length - 1;

                for (var j = 0; j <= ecomLength; j++) {
                    models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].ecommerceImageName[j];
                }
                var prodLength = models[i].productImageName.length - 1;
                for (var j = 0; j <= prodLength; j++) {
                    models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].productImageName[j];
                }
                var portLength = models[i].productImageName.length - 1;
                for (var k = 0; k <= portLength; k++) {
                    models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portraitImageName[k];
                }
                var portfolioLength = models[i].productImageName.length - 1;
                for (var l = 0; l <= portLength; l++) {
                    models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portFolioImageName[l];
                }
            }
            res.status(200).json(models);
        }
    });
};

exports.getWomenModels = function (req, res) {
    ModelDetail.find({
        'categoryType': 'Women',
        'availability':'Yes'
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].portfolioImageName = appSetting.imageServerPath + models[i].userName + '/' + models[i].portfolioImageName;
            }
            res.status(200).json(models);
        }
    });
};
exports.getNationalMenModels = function (req, res) {
    ModelDetail.find({ 
        'modelType': 'National',
        'categoryType': 'Men',
        'availability':'Yes'
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                var ecomLength = models[i].ecommerceImageName.length - 1;

                for (var j = 0; j <= ecomLength; j++) {
                    models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].ecommerceImageName[j];
                }
                var prodLength = models[i].productImageName.length - 1;
                for (var j = 0; j <= prodLength; j++) {
                    models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].productImageName[j];
                }
                var portLength = models[i].productImageName.length - 1;
                for (var k = 0; k <= portLength; k++) {
                    models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portraitImageName[k];
                }
                var portfolioLength = models[i].productImageName.length - 1;
                for (var l = 0; l <= portLength; l++) {
                    models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portFolioImageName[l];
                }
            }
            res.status(200).json(models);
        }
    });
};
exports.getNationalWomenModels = function (req, res) {
    ModelDetail.find({
        'modelType': 'National',
        'categoryType': 'Women',
        'availability':'Yes'
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                var ecomLength = models[i].ecommerceImageName.length - 1;

                for (var j = 0; j <= ecomLength; j++) {
                    models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].ecommerceImageName[j];
                }
                var prodLength = models[i].productImageName.length - 1;
                for (var j = 0; j <= prodLength; j++) {
                    models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].productImageName[j];
                }
                var portLength = models[i].productImageName.length - 1;
                for (var k = 0; k <= portLength; k++) {
                    models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portraitImageName[k];
                }
                var portfolioLength = models[i].productImageName.length - 1;
                for (var l = 0; l <= portLength; l++) {
                    models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portFolioImageName[l];
                }
            }
            res.status(200).json(models);
        }
    });
};
exports.getInterNationalMenModels = function (req, res) {
    ModelDetail.find({
        'modelType': 'InterNational',
        'categoryType': 'Men',
        'availability':'Yes'
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                var ecomLength = models[i].ecommerceImageName.length - 1;

                for (var j = 0; j <= ecomLength; j++) {
                    models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].ecommerceImageName[j];
                }
                var prodLength = models[i].productImageName.length - 1;
                for (var j = 0; j <= prodLength; j++) {
                    models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].productImageName[j];
                }
                var portLength = models[i].productImageName.length - 1;
                for (var k = 0; k <= portLength; k++) {
                    models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portraitImageName[k];
                }
                var portfolioLength = models[i].productImageName.length - 1;
                for (var l = 0; l <= portLength; l++) {
                    models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portFolioImageName[l];
                }
            }
            res.status(200).json(models);
        }
    });
};
exports.getInterNationalWomenModels = function (req, res) {
    ModelDetail.find({
        'modelType': 'InterNational',
        'categoryType': 'Women',
        'availability':'Yes'
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                var ecomLength = models[i].ecommerceImageName.length - 1;

                for (var j = 0; j <= ecomLength; j++) {
                    models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].ecommerceImageName[j];
                }
                var prodLength = models[i].productImageName.length - 1;
                for (var j = 0; j <= prodLength; j++) {
                    models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].productImageName[j];
                }
                var portLength = models[i].productImageName.length - 1;
                for (var k = 0; k <= portLength; k++) {
                    models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portraitImageName[k];
                }
                var portfolioLength = models[i].productImageName.length - 1;
                for (var l = 0; l <= portLength; l++) {
                    models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portFolioImageName[l];
                }
            }
            res.status(200).json(models);
        }
    });
};
exports.getServiceProviders = function (req, res) {

    ServiceProvider.find({}, function (err, sp) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(sp);
        }
    });
};

exports.create = function (req, res, date, bookingOrder) {

    var booking = new BookingDetail();
    booking.mobileNumber = req.body.mobileNumber;
    booking.name = req.body.name;
    booking.location = req.body.location;
    booking.bookingType = 'Model Booking';
    booking.emailId =  req.body.emailId;
    booking.bookingOrderId = bookingOrder;
    booking.bookingDate = date;
    booking.bookingStatus = 'Waiting for approval';;

    booking.save(
        function (err, bookingData) {
            if (err) {
                res.status(500).send({
                    "result": "0"
                });
            } else {

                var modelBooking = new ModelBooking();
                modelBooking.mobileNumber = req.body.mobileNumber;
                modelBooking.name = req.body.name;
                modelBooking.bookingDate = date;
                modelBooking.productDescription = req.body.productDescription;
                modelBooking.location = req.body.location;
                modelBooking.emailId =  req.body.emailId;
                modelBooking.quantityDescription = req.body.quantityDescription;
                modelBooking.modelsName = req.body.modelsName;
                modelBooking.modelId = req.body.modelId;
                modelBooking.bookingOrderId = bookingOrder;
                modelBooking.save(
                    function (err, modelData) {
                        if (err) {
                            console.log(err);
                        } else {
                            var statusDetail = new Status();
                            statusDetail.bookingId = bookingData.id.toString();
                            statusDetail.mobileNumber = req.body.mobileNumber;
                            statusDetail.bookingOrderId = bookingOrder;
                            statusDetail.bookingDate = date;
                            statusDetail.order = 0;
                            statusDetail.materialPickedUp = 0;
                            statusDetail.shootCompleted = 0;
                            statusDetail.imageEditing = 0;
                            statusDetail.delivery = 0;
                            statusDetail.payment = 0;
                            statusDetail.materialReturn = 0;
                            statusDetail.save(function (err, status) {
                                if (err) {
                                    console.log(err)
                                } else {
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
                                                    "title": 'New model booking',
                                                    "body": bookingOrder,
                                                    "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
                                                    "vibrate": [100, 50, 100],
                                                    "data": {
                                                        "url": 'https://rinteger.com/admin/modelbooking',
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
                                    /* res.status(200).json(bookingData); */
                                }
                            })
                        }
                    }
                )
            }
        });
};
/* exports.scheduledModels = function (req, res) {
    ModelDetail.find({
        'isScheduledBooking': true
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength = models.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                var ecomLength = models[i].ecommerceImageName.length - 1;

                for (var j = 0; j <= ecomLength; j++) {
                    models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].ecommerceImageName[j];
                }
                var prodLength = models[i].productImageName.length - 1;
                for (var j = 0; j <= prodLength; j++) {
                    models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].productImageName[j];
                }
                var portLength = models[i].productImageName.length - 1;
                for (var k = 0; k <= portLength; k++) {
                    models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portraitImageName[k];
                }
                var portfolioLength = models[i].productImageName.length - 1;
                for (var l = 0; l <= portLength; l++) {
                    models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].portFolioImageName[l];
                }
            }
            res.status(200).json(models);
        }
    });
}; */