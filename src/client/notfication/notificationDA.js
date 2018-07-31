var Notfication = require ('../../model/notification.model');

exports.addPushSubscriber = function (req, res) {
    var notification = new Notfication(req.body);
    notification.userSubscriptions=req.body ;
    notification.mobileNumber = req.body.no;
    notification.save(function(err,notificationData){

        if(err){
            res.status(500).send({
                "result": err 
            });
        } else{
            res.status(200).json(notificationData);
            console.log(notificationData)
        }
    })
}