'use strict';

var Status = require ('../model/status.model');

exports.getStatus = function (req, res) {
    
    Status.findById(req.params.id, function (err, status) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            
           res.status(200).json(status)
        }
    });
  };

  exports.bookingStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
       }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(statusDetail);
        }
    });
   
  };

  exports.bookingStatusForOne = function (req, res) {
    Status.findOne({
        'mobileNumber': req.params.no,
        'bookingOrderId':req.params.id
       }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(statusDetail);
        }
    });
  };