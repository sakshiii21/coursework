// 1, counter in js ( 30 to 0)
function reverseCounter(){
    for(let i=30;i>=0;i--) console.log(i);
}
// reverseCounter();

// 2. calculate the time it takes between a settimeout call and the inner function actually running
setTimeout(currTimePrint , 1000)
function printzero(){
    console.log("0")
}

// 3. create a termianl clock (HH:MM:SS)
function currTimePrint(){let now = new Date();
let hours = now.getHours()
let mins = now.getMinutes()
let secs = now.getSeconds()

console.log(`curr time is ${hours}:${mins}:${secs}`)}
currTimePrint();

