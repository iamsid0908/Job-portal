const mongoose=require("mongoose")

const JobpostSchema=mongoose.Schema({

    title:String,
    jobDesc:String,
    reqSkill:String,
    salary:String,
    company:{
        type:mongoose.Schema.Types.ObjectId, ref:'Company'
    },
    candidate:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Student'
        }
    ]
})


 const JobPostModel=  mongoose.model("Jobpost",JobpostSchema);
 module.exports=JobPostModel