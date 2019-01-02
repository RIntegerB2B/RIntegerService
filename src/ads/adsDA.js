'use strict';

var AdsDetails = require('../model/adsImages.model');
var appSetting = require('../config/appSetting');

exports.viewImages = function (req, res) {
    AdsDetails.find({}).select().exec(function (err, adsImages) {
        if (err) {
          res.status(500).send({
            message: 'some thing went wrong while retreiving images'
          });
        } else {
            var arraylength = adsImages.length - 1;
           for (var i = 0; i <= arraylength; i++) {
            adsImages[i].adImageName = appSetting.adsServerPath + adsImages[i].adImageName;
           }
           res.status(200).json(adsImages);
        }
      });

    
};


