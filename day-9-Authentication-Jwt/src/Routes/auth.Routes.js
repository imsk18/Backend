const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()


authRouter.post('/register', async (req,res)=>{
    const {name , email , pass} = req.body
    const isUserAlReadyExist = await userModel.findOne({email})

    if(isUserAlReadyExist){
        res.status(400).json({
            message:"this email account already exist"
        })
    }
    const userinfo = await userModel.create({
        name , email, pass
    })

    const token = jwt.sign(
        {
            id: userinfo._id,
            email: userinfo.email
        },
         process.env.JWT_SECRET
)
res.cookie("jwt_token", token)

    res.status(201).json({
        message:"register successfullY",
        userinfo,
        token
    })
})

module.exports = authRouter