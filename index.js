const express = require("express");
const users = require("./routes/users");
require("dotenv/config")
const mongoose = require("mongoose");


const app = express();


// app middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// middleware for routes
app.use("/users", users)


// mongoDB connection
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connection to DB established");
})

app.listen(3002, () => {
    console.log("Server running on port 3002...");
})
app.get('/',(req,res)=>{
    res.status(200).send({success: true, data:'ONLY CODE CHADS NDI 2022'})
})