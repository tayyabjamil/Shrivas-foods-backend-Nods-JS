const nodeMailer = require('nodemailer');

require('dotenv').config()
const EmailForgetPassword = async (reviever,restToken,message) =>{
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
        header:'Password Reset',
        html:
        '<div style="border:1px;border-style:solid;border-radius:12px;border-color:grey;padding:3%"> <p style="text-align:center;font-size:26px;fonst-weight:bold;color:green">Password Reset</p><div style="margin-left:38%;height:30px;font-size:16px;width:220px;padding-top:10px;font-weight:bold;border-radius:20px;background-color:lightgreen">   <a style="padding-left:25px" href="http://localhost:4200/resetPassword/' + restToken + '">Change My Password</a>      </div> <p style="font-size:14px">We recieve a request to change your password . To Change it Follow this link above.</p> <div>  <span style="font-size:16px;font-weight:bold">Didnot Request this change</span> If you donot request the change ignore this message.If you suspect there is a problem with your account Contact us  </div>     <div style="text-align:center;">  <p style="font-size:16px;font-weight:bold">Get 10%,Get 10%</p> <p style="font-size:16px;padding-left:3%;padding-right:3%">Invite friends to shirivas foods and you will each get 10% off When your friend start purchase from your link</p>   </div>  </div>'
       , 
        subject:'Password Reset',  
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
module.exports= EmailForgetPassword;
