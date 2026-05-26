const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.get("/", (req , res) => {
    res.send("I am Root");
});

app.listen(8080, () => {
    console.log("server is listening to the port 8080");
    
});