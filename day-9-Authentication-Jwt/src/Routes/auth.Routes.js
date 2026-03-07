const express = require('express')
const userModel = require('../models/user.model')

const authRouter = express.Router()


authRouter.post('/register', async (req,res)=>{
    const {name , email , pass} = req.body
    const userinfo = await userModel.create({
        name , email, pass
    })

    res.status(201).json({
        message:"register successfullY",
        userinfo
    })
})

module.exports = authRouter