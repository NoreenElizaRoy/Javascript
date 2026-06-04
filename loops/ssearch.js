const array=[2,3,4,5,6,7,10,8,25,1];
let key=215;
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