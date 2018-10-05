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
exports.getbookingDetails = function (req, res) {
    try {
        statusDA.getbookingDetails(req, res);
    } catch (error) {
      console.log(error);
    }
  };
  
  exports.activeBookings = function (req, res) {
    try {
        statusDA.activeBookings(req, res);
    } catch (error) {
      console.log(error);
    }
  };

  exports.cancelBookings = function (req, res) {
    try {
        statusDA.cancelBookings(req, res);
    } catch (error) {
      console.log(error);
    }
}

exports.completedBookings = function (req, res) {
    try {
        statusDA.completedBookings(req, res);
    } catch (error) {
      console.log(error);
    }
}

exports.completedOrder = function (req, res) {
    try {
        statusDA.completedOrder(req, res);
    } catch (error) {
      console.log(error);
    }
}

exports.editingBookingStatus = function (req, res) {
    try {
        statusDA.editingBookingStatus(req, res);
    } catch (error) {
      console.log(error);
    }
}

exports.creativeBookingStatus = function (req, res) {
    try {
        statusDA.creativeBookingStatus(req, res);
    } catch (error) {
      console.log(error);
    }
}
exports.catalogBookingStatus = function (req, res) {
    try {
        statusDA.catalogBookingStatus(req, res);
    } catch (error) {
      console.log(error);
    }
}

