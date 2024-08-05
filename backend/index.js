const express = require('express');
// require("dotenv").config();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;


const app = express();

app.get('/test', (req, res) => {
    res.json("test ok")
})


// register
app.post('/register', async (req, res) => {
    const {username,password} = req.body;
    const createdUser = await User.create({username,password});

    jwt.sign({userId:createdUser._id},jwtSecret,(err,token)=>{
        if(err) throw err;
        res.cookie("token",token).status(201).json("ok");
    })
})

app.listen(4000);

// admin
// mongodb+srv://trysangam:admin@cluster0.ij71e8t.mongodb.net/