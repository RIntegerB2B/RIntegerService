var notificationDA = require('./notificationDA');
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

exports.addPushSubscriber = function (req, res) {
    try {
    
        /* const sub = req.body;
    console.log(sub); */
        notificationDA.addPushSubscriber(req,res);
      } catch (error) {
          console.log(error);
      }
}