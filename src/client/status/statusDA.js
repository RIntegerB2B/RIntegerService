'use strict';

var Status = require ('../../model/status.model');

exports.getStatus = function (req, res) {
    
    Status.findById(req.params.id, function (err, status) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            
           res.status(200).json(status)
        }
    });
  };

