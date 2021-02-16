const mongoose = require("mongoose")
 var productSchema = mongoose.Schema({
  
    productNo:{
      type: Number,
      
    }  , 
    name:{
       type: String,
       required:[true,'must add product name']
    },
    catagory:{
        type: String,
        required:[true,'must add product catagory']
     },
     price:{
        type: Number,
        required:[true,'must add product price']
     },
    detail:{
        type: String,
        required:[true,'must add product detail']
     },
     productCount:Number,
     unitTotal:Number,
     productImage: String,
     productOrders:Number
    
    })

    module.exports = mongoose.model('product',productSchema);