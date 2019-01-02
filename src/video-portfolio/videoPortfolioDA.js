var SuperCategoryVideo = require('./../model/superCategoryVideo.model');

exports.mainCategoryData = function (req, res) {
    SuperCategoryVideo.find({}).select().exec(function (err, superCat) {
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
    SuperCategoryVideo.find({_id:req.params.id}).select().exec(function(err, detailsData){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(detailsData);
      }
    });
  };