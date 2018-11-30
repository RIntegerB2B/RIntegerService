var SuperCategory = require('./../model/supercategory.model');

exports.mainCategoryData = function (req, res) {
    SuperCategory.find({}).select().exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.json(superCat);
        }
    });
}
exports.getSubCategory = function(req, res) {
    SuperCategory.find({_id:req.params.id}).select().exec(function(err, detailsData){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(detailsData);
      }
    });
  };