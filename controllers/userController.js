const User = require("../models/user");
const jwt = require("jsonwebtoken");
const sendVerificationEmail = require("../emails/accountVerification");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    const alreadyUser = await User.find({ email: req.body.email });

    if (alreadyUser.length > 0) {
      return res.status(404).json({
        message: "Email Already Exist",
      });
    } else {
      const user = await User.create(req.body);
      const { username, email, password } = req.body;
      let payload = { subject: user._id };
      const token = jwt.sign(
        { username, email, password },
        "accountactivatekey123",
        { expiresIn: "20m" }
      );
      user.verification = "not verified";
      user.verifyAccountToken = token;
      await user.save({ validateBeforeSave: false });
      sendVerificationEmail(token, req.body.email);
      res.status(201).json({
        user,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "failed to create account",
      message: error,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    if (user.length == 0) {
      return res.status(404).json({
        message: "Account not created ",
      });
    } else {
      
      username = user[0].firstName;
      email = user[0].email;
      contact = user[0].contact;
      userId = user[0]._id;
      refrenceId = user[0].refrenceId;
      role = user[0].role;
    
      //  if(req.body.provider ==='GOOGLE'){
      //   token= req.body.idToken
      //     res.status(201).json({token ,contact,username,userId,refrenceId,email,role})

      //  }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (result) {
          let payload = { subject: user._id };
          const token = jwt.sign(payload, "secretKey");

          res.cookie("jwt", token, {
            expires: new Date(
              Date.now() + process.env.COOKIE * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          });
          res
            .status(201)
            .json({
              token,
              contact,
              username,
              userId,
              refrenceId,
              email,
              role,
            });
        } else {
          return res.status(401).json({
            message: "Auth Password failed",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
exports.verifyAndAccount = async (req, res) => {
  try {
    const user = await User.find({ verifyAccountToken: req.body.token });
    if (user) {
      user[0].verifyAccountToken = undefined;
      user[0].verification = "verified";
      user[0].save({ validateBeforeSave: false });
    }

    res.status(201).json({
      message: "account verifed",
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
exports.updatePassword = async (req, res) => {
  const user = await User.findById(req.body.userId);
  bcrypt.compare(req.body.oldPassword, user.password, (err, result) => {
    if (result) {
      user.password = req.body.newPassword;
      user.save();
      res.status(201).json({
        message: "password updated",
      });
    } else {
      return res.status(401).json({
        message: "Old Password is incorrect",
      });
    }
  });
};
exports.updateInfo = async (req, res) => {
  const user = await User.findById(req.body.userId);
  if (user) {
    (user.email = req.body.email),
      (user.contact = req.body.contact),
      (user.username = req.body.username);
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
  username = user.username;
  email = user.email;

  await user.save();
  res.status(200).json({ email, username });
};
exports.signIn = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });

    if (user.length > 0) {
      console.log(user[0].password);
      username = user[0].firstName;
      email = user[0].email;
      contact = user[0].contact;
      userId = user[0]._id;
      refrenceId = user[0].refrenceId;
      role = user[0].role;
     
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (result) {
          let payload = { subject: user._id };
          const token = jwt.sign(payload, "secretKey");

          res.cookie("jwt", token, {
            expires: new Date(
              Date.now() + process.env.COOKIE * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          });
          res
            .status(201)
            .json({
              token,
              contact,
              username,
              userId,
              refrenceId,
              email,
              role,
            });
        } else {
          return res.status(401).json({
            message: "Auth Password failed",
          });
        }
      });
    } 
    else {
      res.status(401).json({
        message:'Not Signed In first sign in'
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "failed to create account",
      message: error,
    });
  }
};
exports.signUp = async (req, res) => {
  try {
   const Check = await User.find({ email: req.body.email });

    if (Check.length > 0) {
    res.status(404).json({
  message:'Already have an account'
     })
    }else{
    const user = await User.create(req.body); 

      const { username, email, password } = req.body;
      let payload = { subject: user._id };
      const token = jwt.sign(
        {  email, password },
        "accountactivatekey123",
        { expiresIn: "20m" }
      );
      user.verification = "not verified";
      user.verifyAccountToken = token;
      await user.save({ validateBeforeSave: false });
      res.status(201).json({
        user,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "failed to create account",
      message: error,
    });
  }
};