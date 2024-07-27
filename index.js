import express from 'express'
import mongoose from 'mongoose'
const app=express()
import cors from 'cors'
mongoose.connect('mongodb://127.0.0.1:27017/Shareexpense')
.then(()=> console.log('Connected !'));

import peopleRouter from './routes/people.js'


app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(express.json())
app.use('/people',peopleRouter)

app.listen(5000)