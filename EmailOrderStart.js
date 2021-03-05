const nodeMailer = require('nodemailer');

require('dotenv').config()

const EmailOrderStart = async (reciever) =>{
    const transporter =  nodeMailer.createTransport({
        service: "gmail",
        auth:{
            user: 'shrivasafoods@gmail.com',
            pass:process.env.EMAIL_PASSWORD
        }
    });
        const mailOption = {
            from:'shrivasafoods@gmail.com',
            to:reciever, 

            subject:'Order Completed',  
            html:
            '<div style="padding:2%"> <p style="font-size:22px;">Shirivas Food Order Completed</p> <p style="font-size:14px;">Dear Customer:</p><p style="font-size:14px;">Thank you for creating an order with shirivas foods .</p>'
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
  module.exports =EmailOrderStart