let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: 300, quantity: 10 },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: 450, quantity: 5 },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", price: 650, quantity: 3 }
];

console.log(" Book Inventory:");
for (let i = 0; i < books.length; i++) {
    console.log(
        "ID:", books[i].id,
        "Title:", books[i].title,
        "Author:", books[i].author,
        "Price:", books[i].price,
        "Quantity:", books[i].quantity
    );
}

let searchTitle = "Atomic Habits";
let found = false;

for (let i = 0; i < books.length; i++) {
    if (books[i].title === searchTitle) {
        console.log("\n Book Found:");
        console.log(books[i]);
        found = true;
        break;
    }
}

if (!found) {
    console.log("\n Book not found");
}

//Update quantity of a particular book (by ID)
let bookIdToUpdate = 2;
let newQuantity = 12;

for (let i = 0; i < books.length; i++) {
    if (books[i].id === bookIdToUpdate) {
        books[i].quantity = newQuantity;
        console.log("\n Quantity Updated:");
        console.log(books[i]);
        break;
    }
}
