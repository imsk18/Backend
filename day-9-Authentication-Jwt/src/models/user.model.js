const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email:{
        type:String,
        unique:[true,"with this email id account already exist"]
    },
    pass: String
})
const userModel = mongoose.model("userData", userSchema)
module.exports = userModel