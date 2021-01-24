
const express = require('express')

const locationController = require('./../controllers/locationController')

const router = express.Router();
router.route('/').post(locationController.location)     
module.exports = router