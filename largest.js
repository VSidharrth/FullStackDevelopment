const prompt = require("prompt-sync")();
let arr = [10, 45, 23, 89, 5];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest element:", largest);
