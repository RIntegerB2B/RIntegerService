'use strict';
var videoPortfolioMgr = require('./videoPortfolioMgr');
module.exports = function (app) {

    app.route('/videofullmainCategory')
        .get(videoPortfolioMgr.mainCategoryData);
        app.route('/videosubCategory/:id')
        .get(videoPortfolioMgr.getSubCategory);
        app.route('/videotest/:id')
        .get(videoPortfolioMgr.getAllImage);
}