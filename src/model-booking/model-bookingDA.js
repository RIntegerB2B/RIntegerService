'use strict';

var ModelDetail = require ('../model/model.model');
var appSetting = require('../config/appSetting');
var ServiceProvider = require('../model/serviceProvider.model');
var Status = require('../model/status.model');
var BookingDetail = require('../model/booking-detail.model');

exports.allModels = function (req, res) {

    ModelDetail.find({'availability' : 1}, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].primeImage;
               var ecomLength = models[i].ecommerceImageName.length-1;
               
              for(var j =0; j<= ecomLength; j++) {
                models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].ecommerceImageName[j];
              }
              var prodLength = models[i].productImageName.length-1;
              for(var j =0; j<= prodLength; j++) {
                models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].productImageName[j];
              }
              var portLength = models[i].productImageName.length-1;
              for(var k =0; k<= portLength; k++) {
                models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portraitImageName[k];
              }
              var portfolioLength = models[i].productImageName.length-1;
              for(var l =0; l<= portLength; l++) {
                models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portFolioImageName[l];
              }
            }
            console.log(models);
            res.status(200).json(models);
           
        }
    });
};

exports.modelDetail = function (req, res) {

    ModelDetail.find({'_id': req.params.id}, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].primeImage;
               var ecomLength = models[i].ecommerceImageName.length-1;
               
              for(var j =0; j<= ecomLength; j++) {
                models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].ecommerceImageName[j];
              }
              var prodLength = models[i].productImageName.length-1;
              for(var j =0; j<= prodLength; j++) {
                models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].productImageName[j];
              }
              var portLength = models[i].productImageName.length-1;
              for(var k =0; k<= portLength; k++) {
                models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portraitImageName[k];
              }
              var portfolioLength = models[i].productImageName.length-1;
              for(var l =0; l<= portLength; l++) {
                models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portFolioImageName[l];
              }
            }
            
            res.status(200).json(models);
        }
    });
};

exports.getMenModels = function (req, res) {

    ModelDetail.find({'modelType' : 'Men'}, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].primeImage;
               var ecomLength = models[i].ecommerceImageName.length-1;
               
              for(var j =0; j<= ecomLength; j++) {
                models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].ecommerceImageName[j];
              }
              var prodLength = models[i].productImageName.length-1;
              for(var j =0; j<= prodLength; j++) {
                models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].productImageName[j];
              }
              var portLength = models[i].productImageName.length-1;
              for(var k =0; k<= portLength; k++) {
                models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portraitImageName[k];
              }
              var portfolioLength = models[i].productImageName.length-1;
              for(var l =0; l<= portLength; l++) {
                models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portFolioImageName[l];
              }
            }
            res.status(200).json(models);
        }
    });
};

exports.getWomenModels = function (req, res) {
    ModelDetail.find({'modelType' : 'Women'}, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].portfolioImageName = appSetting.imageServerPath  + models[i].userName + '/' + models[i].portfolioImageName;
            }
            res.status(200).json(models);
        }
    });
};
exports.getNationalMenModels = function (req, res) {
    ModelDetail.find({'categoryType' : 'National', 'modelType':'Men' ,'availability' : 1 }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].primeImage;
               var ecomLength = models[i].ecommerceImageName.length-1;
               
              for(var j =0; j<= ecomLength; j++) {
                models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].ecommerceImageName[j];
              }
              var prodLength = models[i].productImageName.length-1;
              for(var j =0; j<= prodLength; j++) {
                models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].productImageName[j];
              }
              var portLength = models[i].productImageName.length-1;
              for(var k =0; k<= portLength; k++) {
                models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portraitImageName[k];
              }
              var portfolioLength = models[i].productImageName.length-1;
              for(var l =0; l<= portLength; l++) {
                models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portFolioImageName[l];
              }
            }
            res.status(200).json(models);
        }
    });
};
exports.getNationalWomenModels = function (req, res) {
    ModelDetail.find({'categoryType' : 'National', 'modelType':'Women','availability' : 1 }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].primeImage;
               var ecomLength = models[i].ecommerceImageName.length-1;
               
              for(var j =0; j<= ecomLength; j++) {
                models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].ecommerceImageName[j];
              }
              var prodLength = models[i].productImageName.length-1;
              for(var j =0; j<= prodLength; j++) {
                models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].productImageName[j];
              }
              var portLength = models[i].productImageName.length-1;
              for(var k =0; k<= portLength; k++) {
                models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portraitImageName[k];
              }
              var portfolioLength = models[i].productImageName.length-1;
              for(var l =0; l<= portLength; l++) {
                models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portFolioImageName[l];
              }
            }
            res.status(200).json(models);
        }
    });
};
exports.getInterNationalMenModels = function (req, res) {
    ModelDetail.find({'categoryType' : 'InterNational', 'modelType':'Men','availability' : 1 }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].primeImage;
               var ecomLength = models[i].ecommerceImageName.length-1;
               
              for(var j =0; j<= ecomLength; j++) {
                models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].ecommerceImageName[j];
              }
              var prodLength = models[i].productImageName.length-1;
              for(var j =0; j<= prodLength; j++) {
                models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].productImageName[j];
              }
              var portLength = models[i].productImageName.length-1;
              for(var k =0; k<= portLength; k++) {
                models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portraitImageName[k];
              }
              var portfolioLength = models[i].productImageName.length-1;
              for(var l =0; l<= portLength; l++) {
                models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portFolioImageName[l];
              }
            }
            res.status(200).json(models);
        }
    });
};
exports.getInterNationalWomenModels = function (req, res) {
    ModelDetail.find({'categoryType' : 'InterNational', 'modelType':'Women' ,'availability' : 1}, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].primeImage;
               var ecomLength = models[i].ecommerceImageName.length-1;
               
              for(var j =0; j<= ecomLength; j++) {
                models[i].ecommerceImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].ecommerceImageName[j];
              }
              var prodLength = models[i].productImageName.length-1;
              for(var j =0; j<= prodLength; j++) {
                models[i].productImageName[j] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].productImageName[j];
              }
              var portLength = models[i].productImageName.length-1;
              for(var k =0; k<= portLength; k++) {
                models[i].portraitImageName[k] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portraitImageName[k];
              }
              var portfolioLength = models[i].productImageName.length-1;
              for(var l =0; l<= portLength; l++) {
                models[i].portFolioImageName[l] = appSetting.imageServerPath + 'SP_' +  models[i].serviceProviderName + '_models' + '/' +  models[i].userName + '/' +  models[i].portFolioImageName[l];
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

exports.create = function (req, res,date,bookingOrder) {
     
    var booking = new BookingDetail(req.body);
    booking.mobileNumber = req.body.mobileNumber;
    booking.name = req.body.name;
    booking.productDescription = req.body.productDescription;
    booking.location = req.body.location;
    booking.quantityDescription = req.body.quantityDescription;
    booking.bookingType = 'model booking';
    booking.modelsName = req.body.modelsName;
    booking.modelId = req.body.modelId;
    booking.bookingOrderId = bookingOrder;

    booking.save(
        function (err, bookingData) {
            if (err) {
                console.log(err); 
                res.status(500).send({
                    "result": "0"
                });
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
             
              statusDetail.save(
                  function (err,statusData) {
                      if (err) { 
                          res.status(500).send({
                              "result": err 
                          });
                      } else {
                       res.status(200).json(statusData)
                      }
                  });   
            }
        });  
  };
  
