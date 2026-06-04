let array=[1,2,2,3,3,4,4,5];
let unique=[];
for (let i=0;i<array.length;i++)
{
    let found=false;
    for(let j=0;j<unique.length;j++)
    {
        if(array[i]==unique[j])
        {
            found=true;
            break;
        }
    }
    if(!found)
    {
        unique.push(array[i]);
    }

}
console.log(unique)

let rev=[];
for (let n=unique.length-1;n>=0;n--)
{
   rev.push(unique[n]);
}
console.log(rev);
