const express = require("express");
const zod = require("zod");
const app = express();

// get request frim /health-chekup with kidneyId query params .  username and pass and authenticate while input validation in the most dumbest way

// app.get("/health-checkup",(req,res)=>{
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     // authentication
//     if(username != "sakshi" || password != "pass"){
//         res.status(400).json({msg:"oopsie! wrong username or password"});
//     }
//     // input validation
//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(400).json({msg:"umm how can you have that number of kidneys"});
//     }

//     // if both validated
//     res.json({msg:"YAYY YOU ARE LOGGED IN"});
// })


const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", (req,res)=>{
    // kidneys = [1,2]
    
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    // const kidneyLength = kidneys.length;

    // res.send("you have "+ kidneyLength + " kidneys");
    if(!response.success){
        res.status(411).json({
            msg:"invalid input"
        })
    }    
    else res.send({response});
    
})



app.listen(3000);
