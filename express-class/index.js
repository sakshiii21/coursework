// assign  - create 4 routes 
// get - user can check how many kidneys they have and their health
// post - user can add a new kidney
// put - user can replace a kidney, make it healthy
// delete - user can remove a kidney
const express = require("express");
const app = express();

const users =[ {
    name:"John",
    kidneys:[{
        isHealthy: false},
        {isHealthy: true
    }]
}]

app.use(express.json());

app.get("/",(req,res)=>{
    const kidneyss = users[0].kidneys;
    let num = kidneyss.length;
    let numHealthy = 0;
    for(let i=0;i<num;i++){
        if(kidneyss[i].isHealthy) numHealthy = numHealthy+1;
    }
    let numUnhealthy = num - numHealthy;
    res.json({
        num,
        numHealthy,
        numUnhealthy
    })
})

app.post("/",(req,res)=>{
    let healthStatus = req.body.isHealthy;
    users[0].kidneys.push({isHealthy:healthStatus})
    res.json({
        msg:"done"
    })
})

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].isHealthy = true;
    }
    res.json({});
})

app.delete("/", (req,res)=>{
    let newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].isHealthy){
            newKidneys.push({
                isHealthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg : "yay bad kidneys gone!"
    })
})
app.listen(3000);