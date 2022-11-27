import { useEffect, useState } from "react";
const AxiosData=()=>{
    const [notes,setNotes]=useState([{id1:"",name1:""}])
    useEffect(()=>{
        fetch("/notes").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setNotes(jsonRes))
    })

    return(<>
    <p>Hello</p>
    {notes.map(note=>
    <div><h1>{note.id1}</h1>
    <p>{note.name1}</p></div>
        )}
    </>)
}
export default AxiosData;