
const prompt = require('prompt-sync')();

let secretnum=Math.floor(Math.random()*10)+1;
let guess;
while(guess!==secretnum)
{
    guess = parseInt(prompt("Guess a number between 1 and 10 : "));
    if(guess>secretnum)
    {
        console.log("TOO HIGH!!!");
    }
    else if(guess<secretnum)
    {
        console.log("TOO lOW!!!");
    }
    else{
        console.log("CORRECT GUESS!!!");
    }
}