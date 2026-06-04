let num = 17;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is Prime");
} else {
    console.log(num + " is Not Prime");
}

//printing
for (num=2;num<=100;num++)
{
    isprime=true;
    for(i=2;i<num;i++){
        if(num%i==0)
        {
            isprime=false;
        }
    }
    if (isprime)
    {
        console.log(num)
    }
}
