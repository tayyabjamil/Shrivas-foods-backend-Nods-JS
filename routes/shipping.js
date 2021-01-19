
const express = require('express')

const shippingController = require('../controllers/shippingController')

const router = express.Router();
router.route('/').post(shippingController.shipping)     
module.exports = router