const JobpostModel=require('../models/jobpost.model');
const CompanyModel=require("../models/company.models");
const StudentModel=require("../models/student.model");

const db={
    
    job:JobpostModel,
    company:CompanyModel,
    student:StudentModel
}
module.exports=db;