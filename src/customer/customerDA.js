'use strict';

var CustomerDetail = require('../model/customer-detail.model');
var Query = require('../model/query.model');
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
                customer.name = req.body.name;
                customer.shootType = req.body.shootType;
                customer.modelType = req.body.modelType;
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
                            modelType: req.body.modelType
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
    query.name = req.body.name;
    query.save(
        function (err, queryData) {
            if (err) {
                res.status(500).send({
                    "result": err
                });
            } else {
                res.status(200).json(queryData)
            }
        });
};