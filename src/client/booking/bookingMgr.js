var bookingDA = require('./bookingDA');
const webpush = require('web-push');

const vapidKeys = {
  "publicKey":"BIvwBoUek8ZLiE2HRr_srixb0Qi-Ql6CVBhhhvIuuZ5PMFYrfP0zSkNRrHD-uvIBhJ3_BDmzSFedMzu5ZuaVVRM",
  "privateKey":"WBd3Qq40-zxnCZYzSNhh8kY6dz9tIoRxS_K7wPnMaKc"
};


webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

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