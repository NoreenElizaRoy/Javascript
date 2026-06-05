//Use map() to create a new array containing squares of numbers.
const array=[2,3,4,5,6,7,8,9,10];
const squ=array.map(num=>num*2);
console.log(squ)

//Use map() to convert all names to uppercase.
const str=["nora","noreen","karthik"];
const news=str.map(ch=>ch.toUpperCase());
console.log(news);

//Use map() to add 10 marks to every student's score.
const marks=[12,13,14,15,17];
const newmark=marks.map(mark=>mark+10);
console.log(newmark);

//Use map() to convert temperatures from Celsius to Fahrenheit.
const celsius=[32,33.34,29];
const fahrenheit=celsius.map(c=>(9/5)*c+32);
console.log(fahrenheit);

//Use map() to extract names from an array of objects.
const students=[
    {name:"noreen",age:21},
    {name:"nora",age:21}
]
const names=students.map(student=>student.name);
console.log(names);