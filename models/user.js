const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
   
 var userSchema = mongoose.Schema({
   
   lastName:{
      type: String,
      required:[true,'must add firstname']
   },

    firstName:{
       type: String,
       required:[true,'must add lastname']
    },
    email:{
        type: String,
        required:[true,'must add user email ']
     },
     password:{
        type: String,
        required:[true,'must add user Password']
     },
     
     phone:{
      type: String,
      // required:[true,'must add contact']
   },

role:{
    type:String,
    enum:['admin','user'],
    default:'user'
},
refrenceId:String,
accountBonus:Number,
verifyAccountToken:String,
passwordResetToken:String,
passwordResetExpires:Date,
verification:String,
provider:String,
})
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.refrenceId= result
    console.log('result'+ result)
    
    console.log('refrence id'+ this.refrenceId)
    return this.refrenceId;
 }
userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
    return next();
    else{
        this.password = await bcrypt.hash(this.password,12)
      
       this.refrenceId = makeid(6)
       console.log(this.refrenceId)
    }
    
     
    
});
userSchema.methods.createPaswordRestToken = function(){
const resetToken = crypto.randomBytes(32).toString('hex')//creating token for sending to emial

this.passwordResetToken = crypto
.createHash('sha256')
.update(resetToken)
.digest('hex')
console.log({resetToken},this.passwordResetToken)
this.passwordResetExpires = Date.now()+30*60*1000
return resetToken ; 
}
module.exports = mongoose.model('user',userSchema);