const express = require("express")
app = express()
app.use(express.json())

// app.get('/',function(req,res){
//     res.send("hello")
// })
const notes = [];

app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.send("notes created")
    
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note delete successfully")
})



app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})