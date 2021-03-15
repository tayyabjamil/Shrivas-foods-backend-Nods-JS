const mongoose = require("mongoose")
var moment = require('moment');
moment().format('MM/DD/YYYY')
 var orderSchema = mongoose.Schema({
  
    cartData: [],
    total:Number,
    firstName:String,
    lastName:String,
    adress1:String,
    adress2:String,
    appartment:String,
    city:String,
    contry:String,
    postalCode:String,
    shippingMethod:String,
    phase:String,
    ownerEmail:String,
    cancelOrder:Boolean,
    user:
        {
          type:mongoose.Schema.ObjectId,
          ref:'user' 
        },
   //   adress:{
   //      type: String,
   //      required:[true,'must add Adress ']
   //   },
    
  date:String,
  orderCount:Number
    })

    orderSchema.pre('save',async function(next){
      var d = new Date();
    
      var date = d.getDate();
      var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
      var year = d.getFullYear();
     this.date = date + "/" + month + "/" + year;
      // this.date = moment().toDate()// get JS Date object from moment object
       this.orderCount = {$inc: 1}
    })
     
    module.exports = mongoose.model('order',orderSchema);