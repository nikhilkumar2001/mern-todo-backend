const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

const routes = require('./routes/todoRoute')

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())

app.use(express.json())


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err))

app.use(routes)

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})