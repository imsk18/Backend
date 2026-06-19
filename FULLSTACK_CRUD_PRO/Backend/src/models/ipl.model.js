const mongoose = require("mongoose")

const iplSchema = new mongoose.Schema({
    winnerList:String,
    session:String
})

const iplModel = mongoose.model("ipl",iplSchema);
module.exports = iplModel