// // console.log("hello world")
// // console.log(a)

// // greet a person given their name
// function greet(first, lastName) {
//     console.log(`Hello ${first} ${lastName}, how are you?`)
// }

// greet("raja","maja")

// // program that greets based on gender
// function greet(gender){
//     if(gender==="F"){
//         console.log("Hello woman! how's your day today?")
//     }
//     else if (gender=="M") console.log("well well")
// }

// greet("F")
// greet("M")
// // program that counts 0 - 1000

// function count(){
//     for(let num = 0;num<=100;num++){
//         console.log(num);
//     }
// }
// count()


// complex primitives

// program to print all even numbers in an array

function evenPrint(arr){
    for(let num in arr){
        if(arr[num]%2==0) console.log(arr[num]);
    }
}

let arr = [23,4,51,6776,45,23,6,456563,6456776,2,1]

evenPrint(arr)

// program to print the biggest number in an array
function largestNum(arr){
    let num = arr[0];
    for(let ind in arr){
        if(arr[ind] > num) num = arr[ind]
    }
    console.log(num);
}
largestNum(arr)

// program that prints all the female people's first name given a complex object
function genderNames(arr){
    for(ind in arr){
        if(arr[ind].gender == "female") console.log(arr[ind].name);
    }
}

let arr2 = [{
    name:"mahi",
    gender: "female"
},
{
    name:"ram",
    gender:"male"
},
{
    name:"sakshi",
    gender:"female"
}]
genderNames(arr2)
// reverses all the elements in an array

function reverse(arr){
    console.log(arr)
    let l = 0, r = arr.length - 1;
    while(l<r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++; r--;
    }
    console.log(arr)
}
reverse(arr);

// functions


// sum of two num
function sum(a,b, fnToCall){
    fnToCall(a+b);
}

// display result in a pretty format
function result(val){
    console.log("The sum of given numbers is "+ val)
}

// takes the sum and print in  passive tense
function PassiveSum(val){
    console.log("the sum's result was "+val)
}

sum(4,5, result);
sum(4,5, PassiveSum);
