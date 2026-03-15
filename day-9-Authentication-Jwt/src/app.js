const express = require('express')
const authRouter = require('./Routes/auth.Routes')
const cookieParser = require('cookie-parse')
const app = express()
app.use(express.json())

app.use('/api/auth',authRouter)

module.exports =app