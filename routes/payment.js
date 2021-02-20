
const express = require('express')

const paymentController = require('./../controllers/paymentController')



const router = express.Router();
router.route('/')

.post(paymentController.postPayments)
router.route('/:id')
.get(paymentController.getPayments)
module.exports = router