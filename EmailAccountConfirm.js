const nodeMailer = require('nodemailer');

require('dotenv').config()

const EmailAccountConfirm = async (token,reciever) =>{
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
            subject:'Verify Account',  
            html:
            '<div style="padding:2%">  <p style="font-size:22px;">Shirivas Food Email Verification</p>   <p style="font-size:14px;">Dear Customer:</p>           <p style="font-size:14px;">Thank you for beginning your account with shirivas foods . Your email verification link is</p><div class="btn">  <a style="height:30px;font-size:16px;width:220px;padding-top:10px;font-weight:bold;border-radius:20px" href="http://localhost:4200/accountVerify/' + token + '">Verify</a>       </div>     <p style="font-size:14px">Please verify your account within 2 hours</p>     <p style="font-size:14px">We thank you again for your support and interest</p>     <p style="font-size:14px">Sincerly</p>       <p style="font-size:14px">Team Shirivas</p>      </div>'
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