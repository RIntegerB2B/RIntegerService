'use strict';

var notificationMgr = require('./notificationMgr');

module.exports = function (app) {
    app.route('/pushnotification')
    .get(notificationMgr.pushNotification);
}