//Use filter() to get all even numbers.
const numbers=[1,2,3,4,5,6,7,8,9,10];
const even=numbers.filter(num=>num%2==0);
console.log(even)

//Use filter() to get all odd numbers.
const odd=numbers.filter(num=>num%2!==0);
console.log(odd)

//Use filter() to get students who scored above 80.
const students =[
    {name:"noreen" , mark:99},
     {name:"nora" , mark:79},
      {name:"karthik" , mark:85},
]

const stud=students.filter(marks=>marks.mark>80);
console.log(stud);

//Use filter() to get products costing less than ₹1000.
const products=[
    {item:"cap",price:100},
    {item:"case",price:100},
    {item:"mobile",price:1001},
    {item:"mobile",price:1050},
];
const newpd=products.filter(product=>product.price<1000);
console.log(newpd)

//Use filter() to get users above 18 years of age
const users =[
    {name:"noreen" , age:22},
     {name:"nora" , age:17},
      {name:"karthik" , age:22},
      {name:"kunju" , age:25},
];
const newuser=users.filter(user=>user.age>18);
console.log(newuser);
