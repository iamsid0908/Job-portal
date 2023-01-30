// cname , jobdesc,salary,req-skills,studentapply{},email,password
const mongoose = require("mongoose")
const CompanySchema=mongoose.Schema({
    cname:{
        type:String
    },
    cemail:{
        type:String
    },
    password:{
        type:String
    },
    jobpost:[{
        type:mongoose.Schema.Types.ObjectId, ref:'Jobpost'
    }
    ]
})
module.exports =  mongoose.model("Company",CompanySchema);