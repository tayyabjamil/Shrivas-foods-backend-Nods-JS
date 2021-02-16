const Product = require('../models/product')
const mongoose = require("mongoose")
const multer = require("multer");
const express = require("express");
var path = require("path");
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const mongoURI = "mongodb+srv://tayyabjamil:tayyabjamil123@cluster0.wzfwv.mongodb.net/shirivasFoods";
const dbpath = "mongodb+srv://tayyabjamil:tayyabjamil123@cluster0.wzfwv.mongodb.net/shirivasFoods";

const conn = mongoose.createConnection(mongoURI);

// let gfs
let gfs;
conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  }).catch(err =>{
        console.log('err' + err)
  });
console.log(gfs)
exports.postProducts =   async (req,res)=>{

    
    try {
        const newProduct = await new Product({
            _id: new mongoose.Types.ObjectId(),

            name: req.body.name,
            price: req.body.price,
            detail: req.body.detail,
            catagory: req.body.catagory,
            productCount:0,
            unitTotal:req.body.price,
            productOrders:req.body.productOrders,
            productImage: req.file.filename,
        })
         newProduct.save();
       res.status(201).json({
        status:'success',
        product:newProduct
    }) 
    } catch (error) {
        res.status(404).json({
            status:'failed creating product',
            message:error
        })
    }
    
        
    }

    exports.getProducts = async(req,res)=>{
        try {
    const products = await Product.find()
    //     .populate({
    //         path:'reviews',
           
    // }).select('-__v')    
    res.status(201).send(products) 
        } catch (error) {
            res.status(404).json({
                status:' No product found',
                message:error
            })
        }
        
    }
    exports.getCatagoryProducts = async(req,res)=>{
        try {
    const products = await Product.find({catagory:req.params.catagory})
    //     .populate({
    //         path:'reviews',
           
    // }).select('-__v')    
    res.status(201).send(products)
        } catch (error) {
            res.status(404).json({
                status:' No product found',
                message:error
            })
        }
        
    }
    exports.deleteProduct = async(req,res)=>{
        try {

            const product = await Product.findOne({ _id: req.body.id })
            if (!product) {
                return res.status(404).json({
                    message: "No product Fount",
                });
    
            } else {
              const deletedProduct = await product.deleteOne()
            res.status(201).json({
            status:'success',
            DeletedProduct:deletedProduct
        }) 
        } }catch (error) {
            res.status(404).json({
                status:'failed',
                message:error  
            })
        }
    }
    exports.editProduct = async(req,res)=>{
        
           
        try {
            const product = await Product.findByIdAndUpdate(req.body._id,req.body)
        res.status(201).json({
            status:'success',  
            updatedProduct:product
        }) 
        } catch (error) {
            res.status(404).json({
                status:'failed in updating Product',
                message:error
            })
        }
    }
    exports.updateProduct = async(req,res)=>{
        try {
            const product = await Product.findByIdAndUpdate({_id:req.params.id},{productOrders:+1})
        res.status(201).json({
            status:'success',
            updatedProduct:product
        }) 
        } catch (error) {
            res.status(404).json({
                status:'failed in updating Product',
                message:error
            })
        }
    }
    exports.getProductImages = (req, res) => {
       console.log(gfs)
            gfs.files.find().toArray((err, files) => {
                // Check if files
                if (!files || files.length === 0) {
                    return res.status(404).json({
                        err: 'No files exist'
                    });
                }
        
                // Files exist
                return res.json(files);
      
        });
        
   
    }
    exports.getProductImage = (req, res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            // Check if file
            if (!file || file.length === 0) {
                return res.status(404).json({ err: 'No file exists' });
            }
    
            // Check if image
            if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                // Read output to browser
                res.set('Content-Type', file.contentType);
                res.set('Content-Disposition', 'attachment; filename="' + file.filename + '"');
    
                const readstream = gfs.createReadStream(file.filename);
    
                readstream.on("error", function (err) {
                    console.log("Got error while processing stream " + err.message);
                    res.end();
                });
    
                readstream.pipe(res);
                res.status(200)
            } else {
                res.status(404).json({ err: 'Not an image' });
            }
        });
    };
    exports.featuredProducts = async(req,res)=>{
        try {
    const featuredProducts = await Product.find().sort( { productOrders : 1 } )
        .limit(8).select('-__v')    
    res.status(201).send(featuredProducts) 
        } catch (error) {
            res.status(404).json({
                status:' No product found',
                message:error
            })
        }
        
    }

    