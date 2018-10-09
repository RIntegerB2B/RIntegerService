'use strict';

var Status = require('../model/status.model');
var BookingDetail = require('../model/booking-detail.model');
var ModelBooking = require('../model/modelBooking.model');
var CatalogBooking = require('../model/catalogBooking.model');
var MarketingBooking = require('../model/marketingBooking.model');
var RegistrationBooking = require('../model/registrationSetup.model');
var EditingBooking = require('../model/editingBooking.model');
var EditingStatus = require('../model/editingStatus.model');
var CreativeStatus = require('../model/creativeBookingStatus.model');
var CatalogStatus = require('../model/catalogBookingStatus.model');
var RegistrationStatus = require('../model/registrationStatus.model');
var AplusStatus = require('../model/aplusBookingStatus.model');
exports.getStatus = function (req, res) {

    Status.findOne({
        'bookingOrderId': req.params.id
    }, function (err, status) {
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
exports.activeBookings = function (req, res) {
 
            BookingDetail.find({ $and: [
                { $or: [{'bookingStatus': 'Booking Approved'}, {'bookingStatus': 'Waiting for approval'}] },
                { $or: [{'mobileNumber': req.params.id}] }
            ]  },
            function(err,bookingDetail){
                if(err) {
                } else{
                    res.status(200).send(bookingDetail);
                }
            })
  };
   
  exports.cancelBookings = function (req, res) {
    BookingDetail.find({
        'mobileNumber': req.params.id,
        'bookingStatus':'Booking Cancelled',
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
exports.completedBookings = function (req, res) {
    BookingDetail.find({
        'mobileNumber': req.params.id,
        'bookingStatus':'Booking Completed',
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

exports.completedOrder = function (req, res) {
    BookingDetail.find({
        'mobileNumber': req.params.id,
        'bookingStatus':'Order Completed',
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
exports.editingBookingStatus = function (req, res) {
    EditingStatus.find({
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
}
exports.creativeBookingStatus = function (req, res) {
    CreativeStatus.find({
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
}
exports.catalogBookingStatus = function (req, res) {
    CatalogStatus.find({
        'bookingOrderId': req.params.id
    }, function (err, status) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(status)
        }
    });
}
exports.registrationBookingStatus = function (req, res) {
    RegistrationStatus.find({
        'bookingOrderId': req.params.id
    }, function (err, status) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(status)
        }
    });
}
exports.aplusBookingStatus = function (req, res) {
    AplusStatus.find({
        'bookingOrderId': req.params.id
    }, function (err, status) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(status)
        }
    });
}