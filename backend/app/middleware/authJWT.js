const jwt=require("jsonwebtoken")
const StudentModel=require("../models/student.model")
require('dotenv').config()

const studentVarifyToken=(req,res,next)=>{
    // console.log(payload)
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]=='JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1],process.env.SECRET_KEY,function(err,payload){
            console.log(payload)
            if(err){
               return  res.status().send({message:"Access denied user not authenticated"})
            }
            StudentModel.findById(payload.id)
            .then(data=>{
                req.user=data;
               next();
               return;
            })
            .catch(err=>{
                req.user=null;
            })
        })
    }else{
        res.status(404).send({message:"JWT not passed"});
    }

}
module.exports=studentVarifyToken;