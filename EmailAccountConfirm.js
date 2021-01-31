const nodeMailer = require('nodemailer');

require('dotenv').config()

const EmailAccountConfirm = async (token,reciever) =>{
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
            html:'<p>Click <a href="https://calm-lake-26690.herokuapp.com/accountVerify/' + token + '">here</a> to confirm account </p>',
           
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
  module.exports =EmailAccountConfirm