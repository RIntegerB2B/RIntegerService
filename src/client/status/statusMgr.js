var statusDA = require ( './statusDA');


exports.getStatus = function (req, res) {
    
    try {

        
  
        statusDA.getStatus(req, res);
    } catch (error) {
        console.log(error);
    }
  };