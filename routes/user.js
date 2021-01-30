const express = require('express')

const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')


const router = express.Router();
router.route('/')
.get(userController.login)
.post(userController.signUp)

router.route('/signUpSocial')
.post(userController.signUp)

router.route('/signInSocial')
.post(userController.login)

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

router.route('/updateBonus/:id')
.post(userController.updateBonus)

module.exports = router