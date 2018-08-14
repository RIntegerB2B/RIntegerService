var customerMgr = require('./customerMgr');

module.exports = function (app) {
    app.route('/customer')
.post(customerMgr.create);

app.route('/query')
.post(customerMgr.customerQuery);
}