const { Query } = require('mongoose')
const mongoose = require("mongoose");
const ShippingAmount = require('../shippinghelper/shipping')
const ObjectId = mongoose.Types.ObjectId;

exports.shipping = async (req, res) => {
    country = req.body.country
    quantity = req.body.quantity
    price = null
    try {
       price =  ShippingAmount(country,quantity) 
        res.status(200).json({
            price: price
    })      
    } catch (error) {
        res.status(404).json({
            status:' No country or quantity found',
            message:error
        })
    
};  
    
}