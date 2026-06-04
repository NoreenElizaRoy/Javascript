const array=[2,3,4,5,6,7,10,8,25,1];
let lar=array[0];
let min=array[0];
for (let i=0;i<array.length;i++)
{
    if(array[i]>lar)
    {
        lar=array[i]
    }
}
console.log("Largest element is ",lar);

for (let i=0;i<array.length;i++)
{
    if(array[i]<min)
    {
        min=array[i]
    }
}
console.log("Smallest element is ",min);