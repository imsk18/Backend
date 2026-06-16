const app = require('./src/app')


// introduction of database
const mongoose = require("mongoose")
 function connetToDb(){
    mongoose.connect("uri")
    then(()=>{
        console.log("connected to db");
        
    })
 }
 connetToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})