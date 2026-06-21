const express = require("express")
const cors = require('cors')
const app = express()
const iplModel = require("./models/ipl.model")

app.use(cors())

app.use(express.json())

/*POST "/api/create"*/
app.post("/api/create", async(req,res)=>{
    const {winnerList,session} = req.body
    const iplInfo = await iplModel.create({
       winnerList,session
    })
    res.status(201).json({
        message: "info add successfully",
        iplInfo:iplInfo
    })

})

/* get "api/fetch" */

app.get("/api/fetch",async(req,res)=>{
    const iplInfo = await iplModel.find()
    res.status(200).json({
        message:"fetched successfully !",
        iplInfo

    })
})

/*delete "/api/delete/:id" */

app.delete("/api/delete/:id", async(req,res)=>{
    const id = req.params.id
    console.log(id);
    await iplModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"deleted successfully !"
    })
    

})




/*update "/api/update"*/
app.patch("/api/update/:id", async(req,res)=>{
    const id = req.params.id
    // console.log(id);
    const {winnerList,session} = req.body
    await iplModel.findByIdAndUpdate(id,{winnerList,session})

    res.status(200).json({
        message:"update successfullY!",
       

    })
    
})

module.exports  = app
