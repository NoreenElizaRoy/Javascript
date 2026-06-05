//Create a function named greet() and call it.
function greet()
{
    console.log("Hello Greetings!");
}
greet();

//Create a function showMessage() that prints "Welcome to JavaScript" and call it.
function showMessage(){
    console.log("Welcome to javascript!");
}
showMessage();

//Create a function displayName() that prints your name and call it.
function displayName(){
    console.log("Noreen Eliza Roy!");
}
displayName();

//Create a function sayHello() and call it three times.
function sayHello(){
    console.log("hello!");
}
sayHello();
sayHello();
sayHello();

//Create a function printDate() that displays today's date and call it
function printDate() {
    console.log(new Date().toDateString());
}
printDate();

//parameter and arguments
function hello(name)
{
    console.log("hello ,"+name);
}
hello("noreen");


//multiple 
function sum(a,b)
{
    return a+b
    
}
let n=sum(10,20);
console.log("Sum is ", n);

//default
function greets(name="guest")
{
    console.log("hello "+name);
}
greets();
greets("kunju");

// returning vlaues
function sum(a,b)
{
    return a+b
    
}
let x=sum(10,20);
console.log("Sum is ", x);

//ex
function names(nm)
{
    return "hello "+nm ;
    
}
let k=names("nora");
console.log(k);

//ex 2
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name = fullName("John", "Doe");
console.log(name)

//returning object
function detailes()
{
    return {
        name :"noreen",
        age : 22,
        course: "js"
    };
}
let student=detailes();
console.log(student);
console.log(student.name);

//returning arrays
function array()
{
    return [10,20,30,40,50];
}
let num=array();
console.log(num);
console.log(num[0]);
//ex 2
function color()
{
    return ["red","blue"];
}
console.log(color());

//function declaration
function add2(a,b)
{
    return a+b;
}
console.log(add2(5,5))

//experssion
const add1=function(a,b)
{
    return a+b;
}
console.log(add1(10,10));

//named experssion
const gree = function sayhello()
{
    console.log("Bye");
}
gree();