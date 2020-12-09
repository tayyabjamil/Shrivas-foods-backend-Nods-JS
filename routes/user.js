
const express = require('express')

const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')


const router = express.Router();
router.route('/')
.get(userController.login)
.post(userController.signUp)
 
router.route('/signIn')

.post(userController.signIn)
 


router.route('/login')
.post(userController.login)


router.route('/forgetPassword')
.post(authController.forgetPassword)

router.route('/accountVerify/')
.post(userController.verifyAndAccount)

router.route('/editInfo')
.post(userController.updateInfo)


router.route('/editPassword')
.post(userController.updatePassword)

router.route('/resetPassword')
.post(authController.resetPassword)

router.route('/referFriend')
.post(authController.referFriend)

module.exports = router