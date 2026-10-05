const express = require("express");

const app = express();

// get request frim /health-chekup with kidneyId query params .  username and pass and authenticate while input validation in the most dumbest way

app.get("/health-checkup",(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    // authentication
    if(username != "sakshi" || password != "pass"){
        res.status(400).json({msg:"oopsie! wrong username or password"});
    }
    // input validation
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({msg:"umm how can you have that number of kidneys"});
    }

    // if both validated
    res.json({msg:"YAYY YOU ARE LOGGED IN"});
})



app.listen(3000);
