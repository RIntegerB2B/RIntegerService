var viewBannerDA = require('./viewBannerDA');


exports.findAllBanner = function(req,res) {
    try{
        viewBannerDA.findAllBanner(req,res)
    }
    catch(error) {
        console.log(error);
    }
}