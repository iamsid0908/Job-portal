const StudentModel=require("../models/index").student;

exports.getAll=(req,res)=>{
    StudentModel.find({})
    .then(data=>{
        
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message})
    })
}
exports.postAll=(req,res)=>{
    const data=req.body
    const user=new StudentModel(data);
    user.save()
    .then(data=>{
        if(!data){
            res.status(404).send({message:"something went wrong"})

        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message})
    })
}

exports.update=(req,res)=>{
    const id=req.params.id;
    StudentModel.findByIdAndUpdate(id,appied.push(req.body.appied))
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not able to update"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}