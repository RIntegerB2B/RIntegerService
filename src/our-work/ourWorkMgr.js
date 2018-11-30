var ourWorkDA = require('./ourWorkDA');

exports.mainCategoryData = function (req, res) {
    try {
        ourWorkDA.mainCategoryData(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getSubCategory = function (req, res) {
try {
    ourWorkDA.getSubCategory(req, res);
} catch (error) {
    console.log(error);
}
}
exports.getAllImage = function (req, res) {
    try {
        ourWorkDA.getAllImage(req, res);
    } catch (error) {
        console.log(error);
    }
}