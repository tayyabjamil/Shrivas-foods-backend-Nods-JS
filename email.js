const nodeMailer = require('nodemailer');
require('dotenv').config()


const sendEmail = async (email,restToken,message) =>{
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
        html:
        '<h1>GRUBHUB</h1><h2>Hello</h2><h4>did you forget your password?Create a new one by Clicking the button below</h4><h4><a href="http://localhost:4200/resetPassword/' + 
        restToken + '"><button>Create new Password</button></a></h4><h4>This link will expire in 2 days.Did you get this link by mistake?No worries just Ignore it</h4><br><h2>Questoins</h2><h4>Feel free to react out customer casre 24/7</h4>',
          
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
module.exports =  sendEmail;
module.exports = sendEmailCustomer;
module.exports = sendVerificationEmail;
module.exports = sendRefrenceEmail;