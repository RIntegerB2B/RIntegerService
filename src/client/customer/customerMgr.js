var customerDA = require ('./customerDA');



exports.create = function (req, res) {
    
    try {
        customerDA.create(req, res);
    } catch (error) {
        console.log(error);
    }
  };

  exports.customerQuery = function (req, res) {
    
    try {
        customerDA.customerQuery(req, res);
    } catch (error) {
        console.log(error);
    }
  };