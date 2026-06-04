
for(let i=1;i<=5;i++)
{
    let pattern="";
    for(let j=1;j<=i;j++)
    {
     pattern+="*";
    }
    console.log(pattern);
}

//inverted
console.log("inverted")
for(let i=5;i>=1;i--)
{
    let pattern="";
    for(let j=1;j<=i;j++)
    {
     pattern+="*";
    }
    console.log(pattern);
}

//pyramid 
console.log("pyramid")
let n = 5;

for (let i = 1; i <= n; i++) {
    let pattern = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }

    // Stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        pattern += "*";
    }

    console.log(pattern);
}