const express = require("express")
const app  = express()

app.use(express.json())


const ipl = []

app.post("/create",(req,res)=>{
   
    ipl.push(req.body)
    console.log(ipl);
     res.send("created")
})


app.get("/fetch",(req,res)=>{
    console.log("fetched success");
    res.send(ipl)
    
})
app.delete("/delete/:index",(req,res)=>{
    // console.log(req.params);
    delete ipl[req.params.index]

    res.send("deleted successfully")
    
})

// patch
app.patch("/update/:index",(req,res)=>{
    ipl[ req.params.index].session = req.body.session
    res.send("updated successfully")
})






module.exports = app