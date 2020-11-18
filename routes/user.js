
const express = require('express')

const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')


const router = express.Router();
router.route('/')
.get(userController.login)
.post(userController.signUp)



router.route('/login')

.post(userController.login)

// .delete(userController.patchApiUsers)
// .patch(userController.deleteApiUsers)

router.route('/forgetPassword')
.post(authController.forgetPassword)

// router.route('/activate/:token')
// .post(userController.verifyAndAccount)

// router.route('/update/:id')
// .post(userController.updatePassword)

router.route('/resetPassword')
.post(authController.resetPassword)

module.exports = router