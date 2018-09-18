'use strict';

var Status = require ('../model/status.model');
var BookingDetail = require('../model/booking-detail.model');

exports.getStatus = function (req, res) {
    
    Status.findOne({
        'bookingOrderId': req.params.id
       }, function (err, status) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            console.log(status);
           res.status(200).json(status)
        }
    });
  };

  exports.bookingStatus = function (req, res) {
    BookingDetail.find({
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

  exports.bookStatus = function (req, res) {

    BookingDetail.findOne({
        'bookingOrderId': req.params.no
       }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bookingDetail);
            console.log(bookingDetail)
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