var adsDA = require('./adsDA');

exports.viewImages = function (req, res) {

    try {
        adsDA.viewImages(req, res);
    } catch (error) {
        console.log(error);
    }
};