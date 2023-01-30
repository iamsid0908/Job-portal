const mongoose=require('mongoose')

const StudentSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    hashedPassword:{
        type:String
    },
    skills:{
        type:String
    },
    cgpa:{
        type:String
    },
    college:{
        type:String
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    },
    appied:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Jobpost'
    }
]
})
const StudentModel=mongoose.model('Student',StudentSchema);
module.exports=StudentModel;