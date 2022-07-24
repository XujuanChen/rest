const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
app.use(bodyParser.json());
// app.use(express.json());


// middleware
app.use('/posts', () => {
    console.log ("Posts")
})

// import router
const postRoute = require('./routes/posts');

// middleware
app.use('/posts', postRoute);

// routes
app.get('/', (req, res) => {
    res.send("HELLO WORLD")
})

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=> console.log("connected to Mongodb"))


// listen
app.listen(3000);