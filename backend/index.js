const express = require("express");

const app = express();

//basic route
app.get("/", (req,res)=>{
    res.send("Hello World.")
})

//port declaration
const port = 4000;


//listening on port 4000
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})