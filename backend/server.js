const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db')
dotenv.config();

connectDB();


app.get('/',(req,res) => {
    res.send('API is running')
})

app.get('/data',(req,res) => {
    res.json({
        msg : "Hi my name is Aditya"
    })
})

const port = process.env.PORT || 5000;

app.listen(5000,console.log(`Server started on PORT : ${port}`));