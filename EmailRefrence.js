const nodeMailer = require('nodemailer');

require('dotenv').config()

        const EmailRefrence = async (email,code,username) =>{
            const transporter =  nodeMailer.createTransport({
                service: "gmail",
                auth:{
                    user: 'shrivasafoods@gmail.com',
                    pass:process.env.EMAIL_PASSWORD
                }
            });
                const mailOption = {
                    from:'shrivasafoods@gmail.com',
                    to:email, 
                    html: '<p>Get discount by using this '+ code +' code in your next order to give  <a href="https://calm-lake-26690.herokuapp.com/discount/' + username + '">10% Discount</a></p>',
                    // html:'<p>Click <a href="https://calm-lake-26690.herokuapp.com/accountVerify/' + token + '">here</a> to confirm account </p>',
       
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

module.exports =EmailRefrence