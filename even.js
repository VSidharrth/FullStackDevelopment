const prompt = require("prompt-sync")();
let num = prompt("Enter a number:");
num = Number(num);

if (num % 2 === 0) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}
