const express = require("express")
const app = express() //server create kr chuke hai

app.get('/',(req, res)=>{
    res.send("hell0 world");
})

app.get('/home',(req,res )=>{
    res.send("welcome to home page");
})

app.get('/about',(req,res)=>{
    res.send("this is about page");
})


app.listen(3000) //(8080,7000,8000,5173,2000) //server ko start karta hai



// const ex = require("express")
// const app = ex()
// app.get('/',(req ,res)=>{
//     res.send('jay ho')
// })


//  app.listen(7000)