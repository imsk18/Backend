const express = require("express")
const app = express()
const iplModel = require("./models/ipl.model")

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

// /*update "/api/update"*/
// app.patch("/api/update/:id", async(req,res)=>{
//     const id = req.params._id
//     console.log(id);

//     // res.status(201).json({
//     //     message:"update successfullY!",
//     //     iplInfo

//     // })
    
// })

module.exports  = app
