const nodeMailer = require('nodemailer');

require('dotenv').config()
const sendEmail = async (reviever,restToken,message) =>{
const transporter =  nodeMailer.createTransport({
    service: "gmail",
    auth:{
        user: 'tayyabjamil777@gmail.com',
        pass:process.env.EMAIL_PASSWORD
    }
});
    const mailOption = {
        from:'',
        to:reviever, 
        html:'<p>Click <a href="http://localhost:4200/resetPassword/' + restToken + '">here</a> to reset your password</p>',
        subject:restToken,  
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
            html:'<p>Click <a href="http://localhost:4200/accountVerify/' + token + '">here</a> to confirm account </p>',
           
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
    const sendEmailCustomer = async (reviever,message) =>{
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
        const sendRefrenceEmail = async (email,code,username) =>{
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
                    html: '<p>Get discount by clicking this link <a href="http://localhost:4200/discount/' + username + '">10% Discount</a></p>',
                    // html:'<p>Click <a href="http://localhost:4200/accountVerify/' + token + '">here</a> to confirm account </p>',
       
                    text:username
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
module.exports= sendEmail;
module.exports = sendEmailCustomer
module.exports = sendVerificationEmail
module.exports =sendRefrenceEmail