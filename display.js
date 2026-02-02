const prompt = require("prompt-sync")();

let n = prompt("Enter a number:");
n = Number(n);

for (let i = 1; i <= n; i++) {
    console.log(i);
}
