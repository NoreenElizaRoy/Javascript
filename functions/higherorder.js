//forEach() 
const numbers=[2,3,4,5,8,10];
numbers.forEach(num=>{console.log(num);});
numbers.forEach(num=>{console.log(num*10);});


//map()
const double = numbers.map(num => num*2);
console.log(double);

//filter
const even = numbers.filter(num=>(num%2==0));
console.log(even);

//reduce
const sum=numbers.reduce((acc,num)=>
{
    return acc+num;
},0);
console.log(sum);
