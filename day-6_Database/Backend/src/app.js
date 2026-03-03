const express  = require("express")
const noteModel = require("./moduls/note.model")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const notes =[]


// create notes and save data in mongodb
app.post("/notes", async (req,res)=>{
    const {title, description} = req.body
  const note = await  noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "note created successfully"
    })
      
})

//GET ALL THE NOTES FROM DATABASE
app.get("/notes", async (req,res)=>{
  const notes =  await noteModel.find()
    
    res.status(200).json({
        message: "notes fetched successfully",
        notes
    })    
})

app.delete("/notes/:id", async (req, res)=>{
    const id = req.params.id
   await noteModel.findByIdAndDelete(id)
   res.status(200).json({
    message: "note deleted successfully"
   })
})


app.patch("/notes/:id", async (req,res)=>{
    const id = req.params.id
    const {description} = req.body
  await  noteModel.findByIdAndUpdate(id, {description})
  res.status(200).json({
    message: "notes updated successfullY"
  })
})




module.exports = app