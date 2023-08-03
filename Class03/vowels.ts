// Solution 1
let alpha = "C";
if(alpha=="a" || alpha=="e" || alpha=="i" || alpha=="o" || alpha=="u"
|| alpha=="A" || alpha=="E" || alpha=="I" || alpha=="O" || alpha=="U"){
    console.log("Value of Alpha is Vowel")
}else{
    console.log("Value of Alpha is not Vowel")
}
// Solution 2
let alpha2 = "A".toLocaleLowerCase();
if(alpha2=="a" || alpha2=="e" || alpha2=="i" || alpha2=="o" || alpha2=="u"){
    console.log("Value of Alpha2 is Vowel")
}else{
    console.log("Value of Alpha2 is not Vowel")
}
// Solution 3
let vowelss3 = ["a","e","i","o","u"];
let alpha3 = "A";
if(vowelss3.includes(alpha3.toLocaleLowerCase())){
    console.log("Value of Alpha3 is Vowel")
}else{
    console.log("Value of Alpha3 is not Vowel")
}


// import * as readline from 'readline';

// const vowelss4: string[] = ["a", "e", "i", "o", "u"];

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a character: ", (abc:any) => {
//   if (vowelss4.includes(abc.toLowerCase())) {
//     console.log("Value of Alpha4 is a vowel");
//   } else {
//     console.log("Value of Alpha4 is not a vowel");
//   }

//   rl.close();
// });

export{}