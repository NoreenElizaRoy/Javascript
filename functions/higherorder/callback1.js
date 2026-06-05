//Create a calculator using higher-order functions.
//Create separate add, subtract, multiply, and divide functions and pass them to a calculator function.

function calculator(a,b,addcallback,subcallback,divcallback,mulcallback)
{
    addcallback(a,b);
    subcallback(a,b);
    mulcallback(a,b);
    divcallback(a,b);
}
const add =(a,b)=>
    {console.log("Sum is = ",a+b);}
const sub =(a,b)=>
    {console.log("Difference is = ",a-b);}
const mul =(a,b)=>
    {console.log("Product is = ",a*b);}
const div =(a,b)=>
    {console.log("Quotient is = ",a/b);}

calculator(100,50,add,sub,mul,div);

//Create a function that filters even numbers and odd numbers using a callback.
array=[1,2,3,4,5,6,7,8,9,10];
function main(callback)
{
 console.log("main");
 callback();
}
const even =(arr) => {
    newarr=array.filter(num=>num%2==0);
    console.log(newarr);
}
const odd =(arr) => {
    oddarr=array.filter(num=>num%2!==0);
    console.log(oddarr);
}
main(even);
main(odd);

//Create a function that calculates total marks using a callback.
const marks=[20,20,30,40,50];
const total=marks.reduce((acc,mark)=>
    {
     return acc+mark;
    },0);

console.log("Total marks :",total)    

//Create a function that checks voting eligibility using a callback.

const prompt = require("prompt-sync")();
function voteEligibility(callback)
{
  const age=Number(prompt("Enter the age :"));
  callback(age);

}
const valid =(age)=>
{
    if(age>18)
    {
        console.log("Eligible to vote");
    }
    else
    {
       console.log("Eligible not to vote"); 
    }
}
voteEligibility(valid);

//Create a function that calculates discounts using a callback.
function discountprice(price,discallback)
{
    const finalprice=discallback(price);
    console.log("Final price=",finalprice);
}
const disaccountten = (price) =>
{
    return price-(price*10/100);
}
const disaccounttwenty = (price) =>
{
    return price-(price*20/100);
}
discountprice(1000,disaccountten);
discountprice(1000,disaccounttwenty);


//Create a function that processes student data using a callback.
const student=[
    {name:"noreen",mark:40},
];

function process(student,callback)
{
   console.log("Student data");
   callback(student);
}

const result = (student) => {
    if(student.mark>50)
    {
        console.log("Passed",student.name)
    }
    else{
        console.log("Failed");
    }
}
process(student,result);


//validate user
function validateInput(input, callback) {
    callback(input);
}

const checkName = (name) => {
    if (name.length >= 3) {
        console.log("Valid Name");
    } else {
        console.log("Invalid Name");
    }
};

validateInput("Noreen", checkName);