const express = require("express")

const app = express()
app.use(express.json())


const ipl = []

app.post("/ipl", (req, res) =>{
    console.log(req.body)
    ipl.push(req.body)
    res.send("note created successfully")

})

app.get("/ipl", (req, res) =>{
    res.send(ipl)

})
app.delete("/ipl/:index",(req,res)=>{
    delete ipl[req.params.index]
    res.send("ipl details deleted successfully ")
})

app.patch("/ipl/:index", (req, res)=>{
    ipl[req.params.index].session = req.body.session
    ipl[req.params.index]. winner = req.body.winner

    res.send("info updated successfully")

})



app.listen(3000, () =>{
   console.log("server is running on port 3000");
    
})
