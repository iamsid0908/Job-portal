const JobPostController=require("../controllers/jobpost.controller")
const studentVarifyToken=require("../middleware/authJWT")
module.exports=app=>{
    app.get("/api/job",JobPostController.getpost);
    app.get("/api/job/:id",JobPostController.findone);
    app.post("/api/job/:id",JobPostController.createpost);
    app.delete("/api/job/:id",JobPostController.deleteone);
    
}