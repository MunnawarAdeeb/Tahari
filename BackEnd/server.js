const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://munnawar:adeeb@cluster0.kpu3lqd.mongodb.net/notesDB").then(()=>{console.log("COnnected")}).catch((e)=>{console.log(e)})
app.use("/",require("./Routes/noteRoute"))
app.listen(3001,()=>{
    console.log("express is running on 3001")
});