let num = 58391;
let largest = 0;
let sum=0;
while (num > 0) {
    let digit = num % 10;
    sum+=digit;
    if (digit > largest) {
        largest = digit;
    }

    num = Math.floor(num / 10);
}

console.log("Largest digit:", largest);
console.log("Sum of digits:", sum);