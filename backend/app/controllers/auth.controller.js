const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const StudentModel=require("../models/student.model")
require('dotenv').config()

exports.Register=(req,res)=>{
    const user=StudentModel({
        name:req.body.name,
        email:req.body.email,
        hashedPassword:bcrypt.hashSync(req.body.password,8)
    });
    user.save()
    .then(data=>{
        return res.send({message:"Sucessful"})
    })
    .catch(err=>{
        return res.status(500).send({message:"failed"})
    })
}
exports.Login=(req,res)=>{
    // console.log(process.env.SECRET_KEY)
    const{email,password}=req.body;
    StudentModel.findOne({email:email})
    
    .then((user)=>{
         console.log(user);
        if(!user){
            return res.status(404).send({message:"user not found"})
        }
        var isValidPassword=bcrypt.compareSync(password,user.hashedPassword)
        if(!isValidPassword){
            return res.status(401).send({accessToken:null,message:"Password incorrect"});
        }
        const payload={
            id:user._id,
            email:user.email
        }
        console.log(payload);
        var token=jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn:86400
        });
        res.send({
            user:user,
            message:"login sucessfull",
            accessToken:token
        })

    })
    .catch(err=>{
        res.status(500).send({message:err.message})
    })

}