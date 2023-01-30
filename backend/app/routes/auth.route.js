const AuthenticationController=require("../controllers/auth.controller")

module.exports=app=>{
    app.post("/api/login",AuthenticationController.Login);
    app.post("/api/register",AuthenticationController.Register);

}