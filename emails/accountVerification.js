const nodeMailer = require('nodemailer');
require('dotenv').config()
const sendVerificationEmail = async (token,reciever) =>{
    const transporter =  nodeMailer.createTransport({
        service: "gmail",
        auth:{
            user: 'tayyabjamil777@gmail.com',
            pass:process.env.EMAIL_PASSWORD
        }
    });
        const mailOption = {
            from:'tayyabjamil777@gmail.com',
            to:reciever, 
            html:'<p>Click <a href="https://test-shrivasafoods.tk/accountVerify/' + token + '">here</a> to confirm account </p>',
           
        }
        await transporter.sendMail(mailOption,(req,res,error)=>{
            if(res){
                res.status(201).json({
                    message:"mail sent to your gmail  account"
                })
              
    }
            else if(error){
                res.status(404).json({
                    message:"provide valid gmail account"
                })
            }
        })
      
    }
    module.exports =  sendVerificationEmail;