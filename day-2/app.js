//✅ Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//✅ npx nodemon fileName.js(app.js)


const express = require("express")
const app = express()  //now server create

app.get('/',(req,res)=>{
    res.send("hello");
})
app.get('/about',(req,res)=>{
    res.send("this is about page");
})
app.get('/home',(req,res)=>{
    res.send("this is home page");
})

app.listen(3000)  //now server start