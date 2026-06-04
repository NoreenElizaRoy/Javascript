let str = "Hello World";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (
        ch === 'a' ||
        ch === 'e' ||
        ch === 'i' ||
        ch === 'o' ||
        ch === 'u'
    ) 
    {
        count++;
    }
}

console.log("Number of vowels:", count);

//character in each line 
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//length without length
let cou=0;
for (let ch of str){
    cou++;
}
console.log("Length ",cou)