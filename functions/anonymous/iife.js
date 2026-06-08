//Create an IIFE that prints "Hello World".
(function()
{
    console.log("Hello World");
})();

//Create an IIFE that prints your name
(function()
{
    console.log("noreen");
})();

//square
(function(num)
{
    console.log(num*num);
})(4);

//cube 
(function(num)
{
    console.log(num**3);
})(3);

//odd of even
(function(num)
{
    if(num%2==0)
    {
        console.log("even")
    }
    else{
        console.log("odd");
    }
})(4);

//largest of 2
(function(n1,n2)
{
    if(n1>n2)
    {
        console.log("Largest num is :",n1);
    }
    else
    {
        console.log("Largest num is :",n2);
    }
})(8,9);

//swap
(function(a,b)
{
    console.log("before ", a,b );
    let temp=a;
    a=b;
    b=temp;
    console.log("after ", a,b );
})(4,6);

//area rect
(function(length,breadth)
{
    console.log("area :",length*breadth);
})(10,5);

//Create an IIFE that prints numbers from 1 to 10.
(function() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
})();

//sum 1 -100
(function() {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }

    console.log("Sum =", sum);
})();

//multi
(function(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
})(5);