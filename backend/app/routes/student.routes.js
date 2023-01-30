const StudentController=require("../controllers/student.controllers")
const studentVarifyToken =require("../middleware/authJWT")

module.exports=app=>{
    app.get("/api/student",StudentController.getAll);
    app.post("/api/student",StudentController.postAll);
    app.put("/api/student/:id",StudentController.update);
    // app.delete("/api/student/:id",StudentController.delete);
}