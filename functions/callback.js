//callback function
function greet(name,callback){
    console.log("Hello"+name);
    callback();
}
function sayBye(){
    console.log("bye!!");
}
greet("noreen",sayBye);

//Create a function greet() and pass it to another function.
const greet1=()=>{console.log("greet");};
greet1();
function main(callback)
{
  console.log("main");
  callback();
}
main(greet1);

//Create a function calculate() that accepts a callback function.
function calculate(callback)
{
    console.log("main calculation");
    callback(10,10);
}
const add = (a,b) => {
    console.log("sum is ,",a+b);
}
calculate(add);


//Create a function that accepts two numbers and a callback operation (add, subtract, etc.).

function calculate1(a, b, operator) {
    operator(a, b);
}

const addi = (a, b) => {
    console.log("sum is", a + b);
};

const sub = (a, b) => {
    console.log("difference is", a - b);
};

const mul = (a, b) => {
    console.log("product is", a * b);
};

calculate1(10, 30, addi);
calculate1(80, 10, sub);
calculate1(10, 10, mul);

//Create a function that executes a callback three times.
function greets(callback){
    callback();
    callback();
    callback();
}
function sayByee(){
    console.log("bye!!");
}
greets(sayByee);

//Create a function that accepts a callback and passes a name to it
function passnm(callback){
    callback("noreen");
}
const dname = (nm)=>
{
 console.log("NAME: ",nm);
}
passnm(dname);

//Create a function that accepts a callback and passes an age to it
function year(callback)
{
    callback(22);
}
const age = (ag) => 
{
    console.log("Age is :",ag);
}
year(age);

//Create a function that logs "Start" and "End" around a callback execution

function execute(callback)
{
    console.log("Start");
    callback();
    console.log("End");
}

function exec()
{
    console.log("inside main");
}
execute(exec);

//Create a function that delays execution of a callback using setTimeout()
function delays(callback)
{
    console.log("main execution");
    setTimeout(
        ()=>{callback();} , 3000);
}

delays (
    ()=>
    {console.log("callback executed");}
    )