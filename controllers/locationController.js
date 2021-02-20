const { Query } = require('mongoose')
const mongoose = require("mongoose");
const request = require('request');
const ObjectId = mongoose.Types.ObjectId;

exports.location = async (req, res) => {
       googleapiresponse = ""
     try {
         googleUrl = `https:maps.googleapis.com/maps/api/geocode/json?latlng=${req.body.latitude},${req.body.longitude}&key=AIzaSyCYbrTDQwp2ZOQbInLEUyjpJHswGEDJaL4`
         console.log(googleUrl)
         request(googleUrl, function (error, response, body) {
             if (!error && response.statusCode == 200) {
                 googleapiresponse = body
             }
             console.log(googleapiresponse)
         });
         res.status(200).json({
             googleapiresponse: googleapiresponse
     })} catch (error) {
         res.status(404).json({
             status:' No order found',
             message:error
         })
    
 };

}