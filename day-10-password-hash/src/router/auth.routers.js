const express = require('express');
const userModel = require('../models/pass.model')
const jwt = require('jsonwebtoken')  
const crypto = require('crypto')
const authRouter = express.Router()


// api/auth/register 
authRouter.post("/register", async(req,res)=>{
    const {name,email,password} = req.body

    const  isUserAlreadyExist = await userModel.findOne({email})

    if(isUserAlreadyExist){ 
        return res.status(400).json({
            message:"User already exists"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")
    const data = await userModel.create({name,email,password:hash})
    

    const token = jwt.sign({
        id:data._id,
        email:data.email
    },
    process.env.JWT_SECRET

)
res.cookie("jwt_token", token)


    res.status(201).json({
        message:"User registered successfully",
        data,
        token
    })
    

})


// api/auth/protected
//cookies
//cookie-parser middleware install aur use karna padta hai.
authRouter.post('/protected',(req,res)=>{
    console.log(req.cookies);
    res.status(200).json({
        message:"this is protected side"
    })
    
})

authRouter.post('/login', async (req,res)=>{     //()=>{} its called controller
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user){
        res.status(404).json({
            message:"user not found to this email"
        })
    }

    const isPassMatched = user.password === password   
    if(!isPassMatched){
        res.status(401).json({
            message:"invalid password"
        })
    }
    const token = jwt.sign({
        user:user._id,
        email:user.email
    },
     process.env.JWT_SECRET,
)
res.cookie("jwt_secret", token)

res.status(200).json({
    message:"logged in success",
    user
})

})

module.exports = authRouter