async function add1(num)
{
  return num;
}
let result=add1(7);
console.log(result)

// //Promise { 5 } to get value use .then()

add1(7).then(number=>console.log(number));

// //1.Create an async function that prints "Hello World".

async function namehello()
{
    console.log("hello world");
}
namehello();

//2
async function name()
{
    console.log("noreen");
}
name();

//3
async function getNum() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10);
        }, 3000);
    });
}

getNum().then(num => console.log(num));

//4
async function add(a,b){
    return a+b;
}
add(2,3).then(sum=>console.log(sum));

//5 Create an async function that returns whether a number is even or odd.
async function even(num)
{
    if (num%2==0){
        return "even";
    }
    else{
       return "odd";
    }
}
even(2).then(res=>console.log(res))

//6 sqaure
async function square(n)
{
    return n**2;
}
square(4).then(re=>console.log(re));

//7 Create an async function that returns the cube of a number.
async function cube(c)
{
    return c**3;
}
cube(3).then(cu=>console.log(cu));

//8 Create an async function that waits 3 seconds before printing a message.
async function message()
{
    await new Promise(msg=>setTimeout(msg,3000));
    console.log("hai");
}
message();

//9 date and time 
async function date()
{
    return new Date();
}
date().then(date=>console.log(date.toString()));

//10Create an async function that returns a greeting message.
async function greets()
{
    return "hello";
}
greets().then(msg=>console.log(msg))

//wait and print 
async function print()
{
    await new Promise(resolve=>setTimeout(resolve,3000));
    console.log("welcome");
}
print();

//wait and return a value
async function printt()
{
    return new Promise(res=>
    {
        setTimeout(()=>res(27),1000);
    }
    )
}
printt().then(mg=>console.log(mg));