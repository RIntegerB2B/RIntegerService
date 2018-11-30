'use strict';
var ourWorkMgr = require('./ourWorkMgr');
module.exports = function (app) {

    app.route('/fullmainCategory')
        .get(ourWorkMgr.mainCategoryData);
        app.route('/subCategory/:id')
        .get(ourWorkMgr.getSubCategory);
        app.route('/test/:id')
        .get(ourWorkMgr.getAllImage);
}