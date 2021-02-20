const mongoose = require("mongoose")

 var paymentSchema = mongoose.Schema({
   
   cardNo:{
      type: String,
      required:[true,'must add cardNo']
   },

    name:{
       type: String,
       required:[true,'must add card name']
    },
    expirationDate:{
        type: String,
        required:[true,'must add expiration date']
     },
     sequrityCode:{
        type: String,
        required:[true,'must add sequirity Code']
     },
     user:
     {
       type:mongoose.Schema.ObjectId,
      
     },
     
})
module.exports = mongoose.model('payment',paymentSchema);