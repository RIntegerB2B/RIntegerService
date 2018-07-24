var bookingDA = require('./bookingDA');
  

 exports.create = function (req, res) {
    
  try {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year

    bookingDA.create(req, res, date);
  } catch (error) {
      console.log(error);
  }
};