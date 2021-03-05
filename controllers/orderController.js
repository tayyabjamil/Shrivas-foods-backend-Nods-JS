const Order = require("../models/order");
const User = require("../models/user");
const mongoose = require("mongoose");
const Product = require("../models/product");
const EmailOrderStatus = require("../EmailOrderStatus");
const EmailCancelOrder = require("../EmailCancelOrder");
const EmailOrderStart = require("../EmailOrderStart");
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        // .populate('user').select('-__v')
        res.status(201).json({
            product: orders,
            length: orders.length,
        });
    } catch (error) {
        res.status(404).json({
            status: " No order found",
            message: error,
        });
    }
};
exports.getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.id });
        res.status(201).json({ orders });
    } catch (error) {
        res.status(404).json({
            status: " No order found",
            message: error,
        });
    }
};
exports.filterOrders = async (req, res) => {
    var startDate = new Date();
    var endDate = new Date();
    startDate.setFullYear(2021, 10, 3);

    endDate.setFullYear(2021, 10, 3);
    try {
        const orders = Order.find({
            startDates: {
                $gte: new Date(new Date(startDate)),
                $lt: new Date(new Date(endDate)),
            },
        });
        res.status(200).json({
            orders: orders,
        });
    } catch (error) {
        res.status(404).json({
            status: "failed No tour stats",
            message: error,
        });
    }
};
exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        EmailOrderStart(req.body.ownerEmail)
        res.status(201).json({
            status: "success",
            product: order,
        });
        req.body.cartData.forEach((item) => {
            Product.findByIdAndUpdate(
                { _id: item._id },
                { $inc: { productOrders: 1 } },
                function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result) {
                        console.log(result);
                    }
                }
            );
        });

        if (req.body.refrence) {
            User.findOneAndUpdate(
                { refrenceId: req.body.refrence },
                { $inc: { accountBonus: 1 } },
                function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result) {
                        console.log(result);
                    }
                }
            );
        }
    } catch (error) {
        res.status(404).json({
            status: "failed creating order",
            message: error,
        });
    }
};
exports.nextPhase = async (req, res) => {
    try {
        const message = "Your order is progressed to " + req.body.phase +" phase"
        Order.findByIdAndUpdate(
            { _id: req.body.orderId },
            { phase: req.body.phase },
            function (err, result) {
                if (err) {
                    console.log(err);
                } else if (result) {
                    res.status(201).json({
                        status: "success",
                        result,
                    });
                }
            }
        );
        const phase = req.body.phase
        EmailOrderStatus(req.body.ownerEmail, message,phase);

        // const product = Product.find({_id:req.body})
    } catch (error) {
        res.status(404).json({
            status: "failed creating order",
            message: error,
        });
    }
};
exports.cancelOrder = async (req, res) => {
    try {
        const order = await Order.find({ _id: req.body.id });
    if(order[0].phase !=="processing"){
        res.status(404).json({
            
            message: 'You can not cancel the order now',
        });
    }
    else{
        Order.findOneAndUpdate(
            { _id: req.body.id },
            { cancelOrder: true,phase:"canceled" },
            
            function (err, result) {
                if (err) {
                    console.log(err);
                } else if (result) {
                    EmailCancelOrder(req.body.ownerEmail);

                    console.log(result);
                }
            }
        );  

        
        order[0].cancelOrder=true
        order[0].phase="canceled"
        console.log(order[0].cancelOrder)
         res.status(201).json({
            status: "success",
        
        });
    
    }
    } catch (error) {
        res.status(404).json({
            status: "failed creating order",
            message: error,
        });
    }
};