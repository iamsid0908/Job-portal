const JobPostModel=require("../models/index").job;
const CompanyModel=require("../models/index").company;

exports.getpost=(req,res)=>{
    JobPostModel.find({})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}

exports.findone=(req,res)=>{
    const id=req.params.id;
    JobPostModel.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"No tutorial found with id "+id});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}
exports.deleteone=(req,res)=>{
    const id=req.params.id;
    console.log(id);
    JobPostModel.findByIdAndRemove(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not able to delete"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}

exports.createpost= async (req,res)=>{
    const userId=req.params.id;
    const UserById= await CompanyModel.findById(userId);
    console.log(UserById);
    if(!UserById){
        res.status(404).send({message:"invalid id"})
    }
    const jobpostt=new JobPostModel({
        title:req.body.title,
        jobDesc:req.body.jobDesc,
        reqSkill:req.body.reqSkill,
        salary:req.body.reqSkill,
        company:userId
    })
    const data=await jobpostt.save();
    UserById.jobpost.push(jobpostt);
    await UserById.save();
    return res.send(UserById);
}