var BannerModel = require('../../model/banner.model');

exports.findAllBanner = function (req, res) {
    BannerModel.find({}).select().exec(function (err, totalBanners) {
      if (err) {
        res.status(500).send({
          message: 'some thing went wrong'
        });
      } else {
        res.status(200).json(totalBanners);
      }
    });
  }
    