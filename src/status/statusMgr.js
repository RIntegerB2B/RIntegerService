var statusDA = require('./statusDA');


exports.getStatus = function (req, res) {

    try {
        statusDA.getStatus(req, res);
    } catch (error) {
        console.log(error);
    }
};



exports.bookingStatus = function (req, res) {

    try {
        statusDA.bookingStatus(req, res);
    } catch (error) {
        console.log(error);
    }
};
exports.bookStatus = function (req, res) {

    try {
        statusDA.bookStatus(req, res);
    } catch (error) {
        console.log(error);
    }
};


exports.bookingStatusForOne = function (req, res) {

    try {
        statusDA.bookingStatusForOne(req, res);
    } catch (error) {
        console.log(error);
    }
};