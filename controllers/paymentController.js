const Payment = require('../models/payment')
const mongoose = require("mongoose")

exports.postPayments =   async (req,res)=>{

    
    try {
        const newPayment = await new Payment({
            _id: new mongoose.Types.ObjectId(),

            cardNo: req.body.cardNo,
            name: req.body.name,
           
            expirationDate: req.body.expirationDate,
            sequrityCode:req.body.sequrityCode,
            user:req.body.userId
        })
         newPayment.save();
       res.status(201).json({
        status:'success',
        product:newPayment
    }) 
    } catch (error) {
        res.status(404).json({
            status:'failed creating Payment',
            message:error
        })
    }     
    }

    exports.getPayments = async(req,res)=>{
        try {
    const payments = await Payment.find({user:req.params.id})
    res.status(201).send(payments) 
        } catch (error) {
            res.status(404).json({
                status:' No Payment found',
                message:error
            })
        }
        
    }