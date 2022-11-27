const express=require("express");
const router=express.Router();
const Note=require("../Models/noteModule");
router.route("/create").post((req,res)=>{
    const id1=req.body.id1;
    const name1=req.body.name1;
    const Ratings=req.body.Ratings;
    const Img=req.body.Img;
    const alt=req.body.alt;
    const Address=req.body.Address;
    const Route=req.body.Route;
    const ServiseOptions=req.body.ServiseOptions;
    const newNote=new Note({
        id1,name1,alt,Address,Route,ServiseOptions,Ratings,Img
    })
    newNote.save();
});

router.route("/notes").get((req,res)=>{
Note.find().then(foundNotes=>res.json(foundNotes))});
module.exports=router;