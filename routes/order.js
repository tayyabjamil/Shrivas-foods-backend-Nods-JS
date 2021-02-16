
const express = require('express')

const orderController = require('./../controllers/orderController')


const router = express.Router();
router.route('/')
.get(orderController.getAllOrders)
.post(orderController.createOrder)
router.route('/:id')
.get(orderController.getMyOrders)

router.route('/shipping')
.post(orderController.nextPhase)


router.route('/cancelOrder')
.post(orderController.cancelOrder)

router.route('/filter')
.post(orderController.filterOrders)

module.exports = router