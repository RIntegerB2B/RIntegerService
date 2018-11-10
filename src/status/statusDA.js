'use strict';

var Status = require('../model/status.model');
var BookingDetail = require('../model/booking-detail.model');
var ModelBooking = require('../model/modelBooking.model');
var CatalogBooking = require('../model/catalogBooking.model');
var MarketingBooking = require('../model/marketingBooking.model');
var RegistrationBooking = require('../model/registrationSetup.model');
var EditingBooking = require('../model/editingBooking.model');
var ScheduledBooking = require('../model/scheduledModelBooking.model');
var EditingStatus = require('../model/editingStatus.model');
var CreativeStatus = require('../model/creativeBookingStatus.model');
var CatalogStatus = require('../model/catalogBookingStatus.model');
var RegistrationStatus = require('../model/registrationStatus.model');
var AplusStatus = require('../model/aplusBookingStatus.model');
var CustomerDetail = require('../model/customer-detail.model');
var AccountMgmtStatus = require('../model/digitalmgmtstatus.model');


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
    }).sort({
        bookingOrderId: -1
    }).exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
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
    if (req.params.type === 'Product Booking') {
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
    } else if (req.params.type === 'Model Booking') {
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
    } else if (req.params.type === 'Catalog Booking') {
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
    } else if (req.params.type === 'Marketing Booking') {
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
    } else if (req.params.type === 'Registration Booking') {
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
    } else if (req.params.type === 'Editing Booking') {
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
    } else if (req.params.type === 'Scheduled Model Booking') {
        ScheduledBooking.find({
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
    BookingDetail.find({
        $and: [{
                $or: [{
                    'bookingStatus': 'Booking Approved'
                }, {
                    'bookingStatus': 'Waiting for approval'
                }]
            },
            {
                $or: [{
                    'mobileNumber': req.params.id
                }]
            }
        ]
    }).sort({
        bookingOrderId: -1
    }).exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });

};

exports.cancelBookings = function (req, res) {
    BookingDetail.find({
        'mobileNumber': req.params.id,
        'bookingStatus': 'Booking Cancelled',
    }).sort({
        bookingOrderId: -1
    }).exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.completedBookings = function (req, res) {
    BookingDetail.find({
        'mobileNumber': req.params.id,
        'bookingStatus': 'Booking Completed',
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
        'bookingStatus': 'Order Completed',
    }).sort({
        bookingOrderId: -1
    }).exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    })
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
exports.register = function (req, res) {
    CustomerDetail.findOne({
        'mobileNumber': req.body.mobileNumber,

    }, function (err, userDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (userDetail == null) {
                var customerDetails = new CustomerDetail();
                customerDetails.mobileNumber = req.body.mobileNumber;
                customerDetails.password = req.body.password;
                customerDetails.save(function (err, registeredData) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).json(registeredData);
                    }
                });
            } else {
                userDetail.password = req.body.password;
                userDetail.save({}, function (err, details) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).json(details);
                    }
                })
            }
        }
    });
}
exports.signin = function (req, res) {
    CustomerDetail.findOne({
        'mobileNumber': req.body.mobileNumber,
        'password': req.body.password
    }, function (err, userDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (userDetail === null) {
                CustomerDetail.findOne({
                    'mobileNumber': req.body.mobileNumber,
                }, function (err, userDetails) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred while retrieving data."
                        });
                    } else {
                        if (userDetails === null) {
                            res.status(200).json(userDetail)
                        } else if (userDetails !== null) {
                            res.status(200).json(userDetails)
                        } /* else if (userDetails.password === undefined) {
                            res.status(200).json(userDetails)
                        } else if (userDetails.password !== undefined) {
                            res.status(200).json(userDetail)
                        } */
                    }
                });
            } else if (userDetail !== null) {
                res.status(200).json(userDetail)
            } 
        }
    });
}
exports.accountMgmtStatus = function (req, res) {
    AccountMgmtStatus.find({
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