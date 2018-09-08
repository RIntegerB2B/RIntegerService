var modelBookingDA = require('./model-bookingDA');

var Status = require('../model/status.model');
var zeroFill = require('zero-fill')

exports.getModelDetails = function (req, res) {

    try {
        modelBookingDA.getModelDetails(req, res);
    } catch (error) {
        console.log(error);
    }
};

exports.allModels = function (req, res) {

    try {
        modelBookingDA.allModels(req, res);
    } catch (error) {
        console.log(error);
    }
};

exports.modelDetail = function (req, res) {

    try {
        modelBookingDA.modelDetail(req, res);
    } catch (error) {
        console.log(error);
    }
};


/* exports.getMenModels = function (req, res) {

    try {
        modelBookingDA.getMenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.getWomenModels = function (req, res) {
    try {
        modelBookingDA.getWomenModels(req, res);
    } catch (error) {
        console.log(error);
    }
}; */
exports.getNationalMenModels = function (req, res) {
    try {
        modelBookingDA.getNationalMenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.getNationalWomenModels = function (req, res) {
    try {
        modelBookingDA.getNationalWomenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.getInterNationalMenModels = function (req, res) {
    try {
        modelBookingDA.getInterNationalMenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.getInterNationalWomenModels = function (req, res) {
    try {
        modelBookingDA.getInterNationalWomenModels(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.getServiceProviders = function (req, res) {
    try {
        modelBookingDA.getServiceProviders(req, res);
    } catch (error) {
        console.log(error);
    }
};

exports.create = function (req, res) {

    try {
        var currentDate = new Date();

        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var date = day + "/" + month + "/" + year;


        var oYear = year.toString();
        var orderYear = oYear.slice(-2);
        var order = "BOSTC";
        var locale = "en-us";
        var result = currentDate.toLocaleString(locale, {
            month: "long"
        });
        var orderMonth = result.substr(0, 3).toUpperCase();


        Status.findOne({}).select().sort('-bookingOrderId').limit(1).exec(function (err, details) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                if (details == null) {
                    var bookingOrder = order + orderYear + orderMonth + "0001";
                    modelBookingDA.create(req, res, date, bookingOrder);
                } else {
                    var maxID = details.bookingOrderId;
                    var incOrder = maxID.slice(-4);
                    var addZero = zeroFill(4, 1);
                    var result = parseInt(incOrder) + parseInt(addZero);
                    var results = zeroFill(4, result);
                    var bookingOrder = order + orderYear + orderMonth + results;
                    modelBookingDA.create(req, res, date, bookingOrder);
                    console.log(bookingOrder);
                }
            }
        });


    } catch (error) {
        console.log(error);
    }
};
