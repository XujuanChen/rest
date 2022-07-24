const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// require('dotenv/config');
app.use(bodyParser.json());


const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware
// app.use('/posts', () => {
//     console.log ("Posts")
// })

// import router
const postRoute = require('./routes/posts');

// middleware
app.use('/posts', postRoute);

// routes
app.get('/', (req, res) => {
    res.send("HELLO WORLD")
})

// connect to DB
// mongoose.connect(process.env.DB_CONNECTION, ()=> console.log("connected to Mongodb"))
const uri = "mongodb+srv://rest:rest@rest.1bp4pim.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


// listen
app.listen(3000);