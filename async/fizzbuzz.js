function fizzbuzz(num){
    if (num%3==0 && num %5==0)
    {
        console.log("FizzBuzz");
    }
    else if (num%3==0)
    {
        console.log("Fizz");
    }
    else if (num%5==0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(num);
    }
}
fizzbuzz(9);
fizzbuzz(20);
fizzbuzz(15);
fizzbuzz(8);