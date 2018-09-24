'use strict';

var Status = require('../model/status.model');
var BookingDetail = require('../model/booking-detail.model');
var ModelBooking = require('../model/modelBooking.model');
var CatalogBooking = require('../model/catalogBooking.model');
var MarketingBooking = require('../model/marketingBooking.model');
var RegistrationBooking = require('../model/registrationSetup.model');
var EditingBooking = require('../model/editingBooking.model');

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
        'bookingOrderId': req.params.id
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
exports.getbookingDetails = function (req, res) {
   if(req.params.type === 'Direct Booking') {
    BookingDetail.find({
        'bookingOrderId': req.params.id
    }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bookingDetail);
        }
    });
   }
else if(req.params.type === 'Model Booking') {
    ModelBooking.find({
        'bookingOrderId': req.params.id
    }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bookingDetail);
        }
    });
}
else if(req.params.type === 'Catalog Booking') {
    CatalogBooking.find({
        'bookingOrderId': req.params.id
    }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bookingDetail);
        }
    });
}
else if(req.params.type === 'Marketing Booking') {
    MarketingBooking.find({
        'bookingOrderId': req.params.id
    }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bookingDetail);
        }
    });
}
else if(req.params.type === 'Registration Booking') {
    RegistrationBooking.find({
        'bookingOrderId': req.params.id
    }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bookingDetail);
        }
    });
}
else if(req.params.type === 'Editing Booking') {
    EditingBooking.find({
        'bookingOrderId': req.params.id
    }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bookingDetail);
        }
    });
}
};
   
