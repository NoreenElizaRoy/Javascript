//Create a new array by copying an existing array using the spread operator.
let arr1=[1,2,3,4,5];
let arr2=[...arr1];
console.log(arr2);

//Merge two arrays using the spread operator.
let n1=[1,2,3,4];
let n2=[5,6,7,8,9];
let merg=[...n1,...n2];
console.log(merg)

//Merge three arrays into one array.
let n3=[10,11,12,13,14];
let merge=[...n1,...n2,...n3];
console.log(merge);

//Add a new element at the beginning of an array using the spread operator.
let arr3=[0,...arr1];
console.log(arr3);

//OBJECTS

//Create a copy of an object using the spread operator.
let students ={
    name:"noreen",
    age:22
};
let copy={...students};
console.log(copy)
//Merge two objects into one object.
let student2=
{
    name:"nora",
    age:21
};
let studmerge={...students,...student2};
console.log(studmerge);


//Add a new property to an existing object using the spread operator.
let updatestud={...students,city:"calicut"};
console.log(updatestud);

//Update an existing property using the spread operator.
let student ={
    name:"noreen",
    age:22
};
let updateprop={...student,age:21};
console.log(updateprop);