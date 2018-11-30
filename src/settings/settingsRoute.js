var viewBannerMgr = require('./viewBanner/viewBannerMgr');


module.exports = function (app) {
  app.route('/allmainbannerImage')
        .get(viewBannerMgr.findAllBanner);
      
}
