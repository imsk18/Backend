const mongoose = require("mongoose")

function connetToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to DB");
        
    })
}

module.exports= connetToDb