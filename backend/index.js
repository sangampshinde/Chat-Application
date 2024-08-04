const express = require('express');
// require("dotenv").config();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL);


const app = express();

app.get('/test', (req, res) => {
    res.json("test ok")
})


// register
app.post('/register', (req, res) => {})

app.listen(4000);

// admin
// mongodb+srv://trysangam:admin@cluster0.ij71e8t.mongodb.net/