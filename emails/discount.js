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
            to:email, 
            html: '<p>Get discount by clicking this link <a href="https://localhost:8000/discount/' + username + '">10% Discount</a></p>',
            // html:'<p>Click <a href="https://localhost:8000/accountVerify/' + token + '">here</a> to confirm account </p>',

            text:username
        }
        await transporter.sendMail(mailOption,(req,res,error)=>{
            if(res){
                console.log('mail sent send refeenc email')
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