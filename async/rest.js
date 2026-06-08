//1 print as array
function show(...args)
{
    console.log(args);
}
show(1,2,3,4);

//2
function sum(...numbers)
    {
        let total=0;
        for (let num of numbers){
            total+=num;
        }
        return total;
    }
console.log(sum(10,20,30));    

//3 average
function avg(...array){
    let total=0;
    for (let i of array)
    {
        total+=i;
    }
    return total/array.length;
}
console.log(avg(10,20,30,40));

//4 largest
function largest(...numbers)
{
    return Math.max(...numbers);
}
console.log(largest(10,70,90));

//5 minimum
function minmum(...n)
{
    return Math.min(...n);
}
console.log(minmum(10,7,8,2,1));

//6 length argu
function arglen(...args)
{
    return args.length;
}
console.log(arglen(1,2,3,4,5));

//7 multile string into one string
function joinstring(...strings)
{
    return strings.join(" ");
}
console.log(joinstring("i","am","noreen"));

//8 print all arguments
function showarg(...words)
{
    words.forEach(word => console.log(word));
}
showarg(2,4,5,6,7)

//9 Create a function that separates the first argument and stores the remaining arguments using the rest operator
function separate(first,...rest)
{
    console.log("First argument :",first);
    console.log("Remianing arguments:",rest);
}
separate(10,20,30,40,50);

//10.Create a function that returns all arguments as an array.
function elements(...args)
{
    console.log(args);
}
elements(10,20,30,40);
