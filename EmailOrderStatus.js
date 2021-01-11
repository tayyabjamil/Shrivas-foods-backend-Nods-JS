const nodeMailer = require('nodemailer');

require('dotenv').config()
    const EmailOrderStatus = async (reviever,message) =>{
        const transporter =  nodeMailer.createTransport({
            service: "gmail",
            auth:{
                user: 'tayyabjamil777@gmail.com',
                pass:process.env.EMAIL_PASSWORD
            }
        });
            const mailOption = {
                from:'tayyabjamil777@gmail.com',
                to:reviever, 
               
                text:message
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
module.exports =EmailOrderStatus