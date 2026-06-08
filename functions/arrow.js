//Convert a normal function that prints "Hello World" into an arrow function.
 const hello = () =>{
    console.log("Hello world!");
 }
 hello();

 //Create an arrow function that prints your name.
  const name = () =>{
    console.log("Noreen ");
 }
 name();
// Create an arrow function that takes a number and prints it.
const prompt = require("prompt-sync")();
const num = () =>{
    let num=Number(prompt("enter the number"));
    console.log("number is ",num);
}
num();
//Create an arrow function that adds two numbers.
const add=(a,b)=>
{
    return a+b;
}
console.log("sum is",add(10,20));

//Create an arrow function that multiplies three numbers.
const mul=(a,b,c)=>
{
    return a*b*c;
}
console.log("product  is",mul(10,20,20));

//Create an arrow function that returns the square of a number.
const sq=(num)=>
{
    return num*num;
}
console.log("Square is ",sq(4));

//Create an arrow function that returns the cube of a number.
const cube=(num)=>
{
    return num**3;
}
console.log("cube is ",cube(4));

//Create an arrow function that checks whether a number is positive or negative.
const post=(n)=>{
    if(n>0){
        console.log("positive number");
    }
    else{
        console.log("negative number");
    }
}
let n1=Number(prompt("Enter the number"));
post(n1);

//Create an arrow function that returns the larger of two numbers.
const lar=(n1,n2)=>
{
  let flag=false;

 if (n1>n2)
 {
    return n1;
 }
 else{
    return n2;
 }
}
console.log("Larger number is ",lar(30,40));

//Create an arrow function that returns the length of a string.
const strlen = (str)=>{
    return str.length;
}
console.log("Length of string is ",strlen("noreen"))

