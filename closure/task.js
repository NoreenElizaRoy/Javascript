// function outer()
// {
//     let name="noreen";
//     function inner()
//     {
//         console.log(name);
//     }
//     return inner;
// }
// let show=outer();
// show();

function outer(value){
    return function (name)
    {
        console.log(name)
    };
}
let nm=outer();
nm("noreen")

//multiplication
function multi(num)
{
    return function(value)
    {
        console.log(num*value);
    };
}
let double=multi(2);
double(3);

//bankacct
function bank()
{
    let balance=1000;
    return function(amt)
    {
        balance+=amt;
        console.log(balance);
    };
}
let deposite=bank();
deposite(100);