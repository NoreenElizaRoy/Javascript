//Use reduce() to find the sum of an array.
//Use reduce() to find the product of all numbers
const array=[1,2,3,4,5,6,7,8,9];
const sum=array.reduce((acc,curr)=>
    {
        return acc+curr
    },0);
const mul=array.reduce((acc,cur)=>{
    return acc*cur
},array[0]);
console.log("sum is ",sum);
console.log("product is ",mul);

//Use reduce() to find the largest number.

const max=array.reduce((acc,num)=>
    {
      return acc > num ? acc : num;
    },array[0]
);
console.log(max);

//Use reduce() to count total marks of students.
const students =[
    {name:"noreen" , mark:99},
     {name:"nora" , mark:79},
      {name:"karthik" , mark:85},
]
const totalmark=students.reduce((acc,student)=>
{
    return acc+student.mark
},0);
console.log(totalmark);

//Use reduce() to calculate total cart value
const carts=[
    {item:"cap",price:100},
    {item:"case",price:100},
    {item:"mobile",price:1001},
    {item:"mobile",price:1050},
];
const amt=carts.reduce((acc,item)=>{return acc+item.price},0);
console.log(amt);