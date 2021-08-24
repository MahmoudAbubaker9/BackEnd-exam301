'use strict'
const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(cors()) // after you initialize your express app instance
require('dotenv').config();
const axios = require('axios'); // require the package

app.use(express.json())


const mongoose = require("mongoose");
const flowersModel = require("./models/model");
const {allFlower ,addFav,getFav , updataFav,deleteFav} = require("./controller/Contrroller");
mongoose.connect("mongodb://localhost:27017/flowers", { useNewUrlParser: true });


app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})

app.get('/allFlower', allFlower)
app.post('/addFav', addFav)
app.get('/getFav', getFav)
app.delete('/deleteFav', deleteFav)
app.put('/updataFav', updataFav)

app.listen(process.env.PORT)

