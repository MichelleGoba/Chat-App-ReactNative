// initialise dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy


// instance for express application
const app = express();
const port = 8000;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

// connect app to db
mongoose.connect(
    "mongodb+srv://gobamichelleolwethu:michelle2022@cluster0.20h5gwu.mongodb.net/",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(() =>{
    console.log("Connected to MongoDB")
}).catch((err) =>{
    console.log("Error connecting to MongoDB, err")
});

// listen
app.listen(port, () => {
    console.log("Server running on port 8000");
});

