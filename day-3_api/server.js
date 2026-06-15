const express = require('express')

const app = express()
app.use(express.json())


const notes = []
app.post('/create',(req,res)=>{

    // console.log(req.body);
    notes.push(req.body)

    console.log(notes);
    
    res.send("note created")
})


app.get('/see',(req,res)=>{

    console.log("notes fetch success");
    
    res.send(notes)
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})