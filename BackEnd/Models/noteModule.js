const mongoose=require("mongoose");
const notesSchema={
    id1:String,
    name1:String,
    Ratings:String,
    Img:String,
    alt:String,
    Address:String,
    Route:String,
    ServiseOptions:String

}
const Note=mongoose.model("Note",notesSchema);
module.exports=Note;