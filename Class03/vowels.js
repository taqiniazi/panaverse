"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Solution 1
var alpha = "C";
if (alpha == "a" || alpha == "e" || alpha == "i" || alpha == "o" || alpha == "u"
    || alpha == "A" || alpha == "E" || alpha == "I" || alpha == "O" || alpha == "U") {
    console.log("Value of Alpha is Vowel");
}
else {
    console.log("Value of Alpha is not Vowel");
}
// Solution 2
var alpha2 = "A".toLocaleLowerCase();
if (alpha2 == "a" || alpha2 == "e" || alpha2 == "i" || alpha2 == "o" || alpha2 == "u") {
    console.log("Value of Alpha2 is Vowel");
}
else {
    console.log("Value of Alpha2 is not Vowel");
}
// Solution 3
var vowelss3 = ["a", "e", "i", "o", "u"];
var alpha3 = "A";
if (vowelss3.includes(alpha3.toLocaleLowerCase())) {
    console.log("Value of Alpha3 is Vowel");
}
else {
    console.log("Value of Alpha3 is not Vowel");
}
var readline = require("readline");
var vowelss4 = ["a", "e", "i", "o", "u"];
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter a character: ", function (abc) {
    if (vowelss4.includes(abc.toLowerCase())) {
        console.log("Value of Alpha3 is a vowel");
    }
    else {
        console.log("Value of Alpha3 is not a vowel");
    }
    rl.close();
});
