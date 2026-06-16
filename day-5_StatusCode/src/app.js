const express = require('express')
const app = express()

app.use(express.json())


const ipl = []

app.post("/create",(req,res)=>{

    console.log(req.body);
    ipl.push(req.body)
    
    res.status(201).json({
        message:"created successfully!",
        ipl
    })
})

app.get("/fetch",(req,res)=>{
    res.status(200).json({
        message:"fetch success!",
        ipl:ipl
    })
})

app.delete("/remove/:idx",(req,res)=>{
    delete ipl[req.params.idx]
    res.status(204).json({
        message:"deleted successfully !"
    })

})

/* patch  "/update" a specific items */
app.patch("/update/:index",(req,res)=>{
    ipl[req.params.index].session = res.body.session

    res.status(200).json({
        message:"updated successfully!"
    })
})





module.exports = app