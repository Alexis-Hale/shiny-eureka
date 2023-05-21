import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Cors from 'cors'
import dbMessages from './dbMessages.js'
//App Config
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb://127.0.0.1:27017/chating'

//Middleware
app.use(express.json())
app.use(Cors())
//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
   })
//API Endpoints


app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))
app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    console.log(dbMessages)
    Messages.create(dbMessage)
    .then((data) => {
    res.status(201).send(data)
    .catch((err)=>res.status(500).send(err))
    })
   })
   app.get('/messages/sync', (req, res) => {
    const dbMessages=req.body;
    console.log(dbMessages)
    Messages.find()
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>res.status(500).send(err))
   })
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))