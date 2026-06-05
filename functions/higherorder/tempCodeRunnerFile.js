const prompt = require("prompt-sync")();
function voteEligibility(callback)
{
  const age=Number(prompt("Enter the age :"));
  callback(age);

}
const valid =(age)=>
{
    if(age>18)
    {
        console.log("Eligible to vote");
    }
    else
    {
       console.log("Eligible not to vote"); 
    }
}
voteEligibility(valid);