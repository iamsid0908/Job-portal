const mongoose=require("mongoose")

const StudentJobSchema=mongoose.Schema({

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
const StudentJobPostModel=  mongoose.model("Jobpost",StudentJobSchema);
module.exports=StudentJobPostModel