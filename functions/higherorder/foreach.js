//Use forEach() to print all array elements.
const numbers=[2,3,4,5,8,10];
numbers.forEach(num=>{console.log(num);});

//Use forEach() to print names with their index.
const names=["noreen","nora"];
names.forEach((name,index)=>{
    console.log(index,name);
});
//Use forEach() to calculate total marks manually.
const students = [
    { name: "Noreen", mark: 40 },
    { name: "John", mark: 75 },
    { name: "Nora", mark: 90 }
];
let total=0;
students.forEach(student => {
    total += student.mark;

})
console.log("total mark :",total);

//Use forEach() to print only positive numbers.
const numbers1=[2,3,-8,4,5,-9,-5,-6,8,10];
numbers1.forEach(num=>{
    if(num>0)
    {
        return console.log(num);
    }
})
//Use forEach() to count vowels in an array of strings.
const words=["noreen","john"];
let count=0;
words.forEach(word=>
{
    for (let ch of word){
    if("AEIOUaeiou".includes(ch))
    {
        count++;
    }
}
}
);
console.log("Vowel count :",count);
