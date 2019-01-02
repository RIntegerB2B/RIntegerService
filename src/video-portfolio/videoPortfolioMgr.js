var videoPortfolioDA = require('./videoPortfolioDA');

exports.mainCategoryData = function (req, res) {
    try {
        videoPortfolioDA.mainCategoryData(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getSubCategory = function (req, res) {
try {
    videoPortfolioDA.getSubCategory(req, res);
} catch (error) {
    console.log(error);
}
}
exports.getAllImage = function (req, res) {
    try {
        videoPortfolioDA.getAllImage(req, res);
    } catch (error) {
        console.log(error);
    }
    }