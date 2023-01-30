const CompanyController=require("../controllers/company.controller")

module.exports=app=>{
     app.get("/api/company",CompanyController.getData);
    app.post("/api/company",CompanyController.createList);
    
//     app.delete("./api/company/:id",CompanyController.delete);
 }