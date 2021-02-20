const User = require('../models/user')
const EmailForgetPassword = require('../EmailForgetPassword')
const EmailRefrence = require('../EmailRefrence')

const jwt = require('jsonwebtoken')

const bcrypt = require("bcrypt")
const mailgun = require("mailgun-js");
const crypto = require("crypto")
const DOMAIN = 'sandbox887a56e308e749a5b63b97b37c53f092.mailgun.org'
const mg = mailgun({ apiKey: 'adad21bb96143ddc02fbd5867b2db20d-2fbe671d-6133ae2c', domain: DOMAIN })
exports.ristrictsTo = (...roles) =>{
    return (req,res,next) =>{
        if(!roles.includes(req.body.role)){
            return res.status(401).json({
                message:"You are not authorized"
            })
        }
        else{
            next();
        }
    }
}
exports.forgetPassword = async (req,res,next)=>{
    const user = await User.findOne({email : req.body.email})
if(!user){
  return res.status(404).json({
        status: 'invalid',
        message: "Email NOt found"
    })
}
if(user.provider){
if(user.provider == 'GOOGLE' || user.provider == 'FACEBOOK'){
    return res.status(404).json({
        status: 'invalid',
        message: "Social Account Error"
    })
}
}
const restToken = user.createPaswordRestToken();
await user.save({validateBeforeSave:false});
// const resetUrl = `https://calm-lake-26690.herokuapp.com/resetPassword${restToken}`
const message = `forget password reset password at url ${restToken}`
try {
    EmailForgetPassword(

        req.body.email,
        restToken,
          message
      );
      return res.status(200).json({
        message:"mail sent"
    })   
} catch (error) {
user.passwordResetToken = undefined;
user.passwordResetExpires = undefined;
await user.save({validateBeforeSave:false});
return res.status(500).json({
    error:error
})   
}
}

exports.resetPassword = async(req,res)=>{
   
       
    const hashedToken = crypto
    .createHash('sha256')
.update(req.body.resetToken)
.digest('hex')
    const user = await User.findOne(
        {
            passwordResetToken : hashedToken,
        passwordResetExpires:{$gt:Date.now()}
    }
        )
if(!user){
  return res.status(401).json({
        status: 'invalid',
        message: "Please reset Password again as token expired for sequrity reasons"
    })
}else{
  if(req.body.password === req.body.confirmPassword){
    user.password=req.body.password
    // user.confirmPassword = req.body.confirmPassword
    // user.passwordResetToken = undefined
    // user.passwordResetExpires = undefined
    await user.save();
    let payload = { subject: user._id };
    const token = jwt.sign(payload, "secretKey")
    res.status(201).json({ token })
  }
  else{
   return res.status(404).json({
        message: "Password not same",
    });

  }
}
}
exports.referFriend = async(req,res)=>{
    try {

        const user = await User.findOne(    
            {
                _id:req.body.userId,
                refrenceId : req.body.refrenceCode,

            })
            if(user){
                username = user.firstName
       
                EmailRefrence(

            req.body.friendEmail,
            req.body.refrenceCode,
            username
          );
          return res.status(201).json({
            message:"code sent"
        })   
    }else{
        return res.status(400).json({
            message:"Your Refrence Id is incorrect"
        })
    }
} catch (error) {
    return res.status(404).json({
        message: "error",
    });

    }   
   }