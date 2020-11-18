const express = require('express')
const mongoose = require("mongoose")
const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');
var path = require("path");

const dbpath = "mongodb+srv://tayyabjamil:tayyabjamil123@cluster0.wzfwv.mongodb.net/shirivasFoods";

const Grid = require('gridfs-stream');
const crypto = require('crypto');
const productController = require('./../controllers/productController')

const authController = require('./../controllers/authController')
const router = express.Router(); 

// const conn = mongoose.createConnection(mongoURI);

// Init gfs

const storage = new GridFsStorage({
    url: dbpath,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });
let gfs;

router.route('/')
.get(productController.getProducts)
.post(upload.single('productImage'), productController.postProducts)
.delete(authController.ristrictsTo('admin'),
productController.deleteProduct)
// router.route('/tourStats')
// .get(tourController.getTourStats)
// router.route('/tours-within/:distance/center/:latlng/unit/:unit').post(tourController.toursWithin)
// .get(tourController.getTourStats) 
router.route('/images')
.get(productController.getProductImages)

router.route('/image/:filename')
.get(productController.getProductImage)

router.route('/featuredProducts')
.get(productController.featuredProducts)



router.route('/:id')
.patch(authController.ristrictsTo('admin'),productController.updateProduct)
.get(productController.getProductImage)
router.route('/:catagory')
.get(productController.getCatagoryProducts)
// .get(tourController.getApiTours)
// .patch(tourController.patchApiTours)  
// .delete(authController.ristrictsTo('admin'),
//  tourController.deleteApiTours)
 
//  router.route('/:tourId/:userId/reviews')
//  .post(reviewsController.postReviews)
module.exports =router

// const fileimageFilter = (req, file, cb) => {
//     var campaignImage = path.extname(file.originalname);
//     if (
//       campaignImage !== ".png" &&
//       campaignImage !== ".jpg" &&
//       campaignImage !== ".gif" &&
//       campaignImage !== ".jpeg"
//     ) {
//       {
//         console.log("Error");
//         cb(null, false);
//         return cb(new Error("Only images are allowed"));
//       }
//     } else {
//       console.log("image uploaded");
//       cb(null, true);
//     }
//   };
  
//   const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, "./public/uploads/");
//     },
//     filename: function(req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });

//   const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileimageFilter
//   });

