const User = require("../models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
exports.signUp = async (req, res) => {
    try {
      const alreadyUser = await User.find({email:req.body.email})
            
            if (alreadyUser.length > 0) {
                return res.status(404).json({
                  message: "Email Already Exist"
                });
              } else {
        
      const user = await User.create(req.body)

        res.status(201).json({
            user,

        })

    }} catch (error) {
        res.status(404).json({
            status: 'failed to create account',
            message: error
        })
    }
}
exports.login = async (req, res) => {
    try {
      
        const user = await User.find({ email: req.body.email })
        if (!user) {
            return res.status(404).json({
                message: "Auth User failed",
            });

        } else {
    console.log(user[0].password)
    username=user[0].username
    email=user[0].email
    userId=user[0]._id
    refrenceId=user[0].refrenceId
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (result) {
                    let payload = { subject: user._id };
                    const token = jwt.sign(payload, "secretKey")
                
res.cookie('jwt',token,{
    expires: new Date(Date.now() + process.env.COOKIE*24*60*60*1000 ),
    httpOnly:true

})
res.status(201).json({ token ,username,userId,refrenceId,email})
                }
                else {
                    return res.status(401).json({
                        message: "Auth Password failed",
                    });

                }
            })
        }
    } catch (error) {
        res.status(404).json({
            error
        })

    }
}