const array=[2,3,4,5,6,7,10,8,25,1];
let key=5;
let found=false;
for (let i=0;i<array.length;i++)
{
    if(key==array[i])
    {
        found=true;
        break;
    }
}
if(found){
console.log("Key found  ");
}
else{
   console.log("Key not found  "); 
}
// with array function

let index=array.indexOf(key,0);
if(index==-1)
{
    console.log("Key not found "); 
}
else{
    console.log("Key found at ",index); 
}
console.log(index);