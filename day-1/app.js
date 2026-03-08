// console.log("hello")
// ✅ node app.js se run hoga

// ✅ use of package

// const catMe = require("cat-me")
// catMe()
// console.log(catMe())


// ✅ how to crate server

const express = require("express")
const app = express() //server create kr chuke hai

// app.get('/',(req, res)=>{
//     res.send("hell0 world");
// })

app.get('/home',(req,res )=>{
    res.send("welcome to home page");
})

app.get('/about',(req,res)=>{
    res.send("this is about page");
})


app.listen(8080) //(8080,7000,8000,5173,2000) //server ko start karta hai

