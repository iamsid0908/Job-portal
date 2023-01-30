const CompanyModel=require("../models/index").company;

exports.getData=(req,res)=>{
    CompanyModel.find({})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}

exports.createList=(req,res)=>{
    const data=req.body;
    const User=new CompanyModel(data);
    User.save()
    .then(data=>{
        if(!data){
            res.status(404).send({message:"something went wrong"})

        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}