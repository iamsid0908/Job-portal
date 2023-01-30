const express=require("express");
const mongoose =require("mongoose")
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors")
require('dotenv').config()


mongoose.connect("mongodb+srv://sidd:sidd@cluster0.1ixglii.mongodb.net/?retryWrites=true&w=majority")

const db=mongoose.connection;
db.on("open",()=>{
    console.log("connected db")
})

db.on("error",()=>{
    console.log("dis-connected");
})

app.use(cors({
    origin:'*'
}))
app.use(bodyParser.json());

require("./app/routes/student.routes")(app);
require("./app/routes/company.routes")(app);
require("./app/routes/jobpost.routes")(app);
require("./app/routes/auth.route")(app)


// const PORT=8000;
app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`);
    
})