const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
var path = require("path");

const dbpath =
  "mongodb+srv://tayyabjamil:tayyabjamil123@cluster0.wzfwv.mongodb.net/shirivasFoods";

const Grid = require("gridfs-stream");
const crypto = require("crypto");
const productController = require("./../controllers/productController");

const authController = require("./../controllers/authController");
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
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });
let gfs;

router
  .route("/")
  .get(productController.getProducts)
  .post(upload.single("productImage"), productController.postProducts)
  .delete(productController.deleteProduct);

router.route("/delete").post(productController.deleteProduct);

router
  .route("/editProduct")
  .post(upload.single("productImage"), productController.editProduct);
router.route("/images").get(productController.getProductImages);

router.route("/image/:filename").get(productController.getProductImage);

router.route("/featuredProducts").get(productController.featuredProducts);

router
  .route("/:id")
  .patch(authController.ristrictsTo("admin"), productController.updateProduct)
  .get(productController.getProductImage);
router.route("/catagory/:catagory").get(productController.getCatagoryProducts);

module.exports = router;
