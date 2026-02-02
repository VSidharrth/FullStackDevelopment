class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    displayBook() {
        console.log(
            "ID:", this.id,
            "Title:", this.title,
            "Author:", this.author,
            "Price:", this.price,
            "Quantity:", this.quantity
        );
    }
}

let inventory = [
    new Book(1, "The Alchemist", "Paulo Coelho", 300, 10),
    new Book(2, "Atomic Habits", "James Clear", 450, 5),
    new Book(3, "Clean Code", "Robert C. Martin", 650, 3)
];

console.log("Book Inventory:");
for (let i = 0; i < inventory.length; i++) {
    inventory[i].displayBook();
}

let searchTitle = "Atomic Habits";
let isFound = false;

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].title === searchTitle) {
        console.log("\n Book Found:");
        inventory[i].displayBook();
        isFound = true;
        break;
    }
}

if (!isFound) {
    console.log("\n Book not found");
}

let updateId = 2;
let updatedQuantity = 12;

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === updateId) {
        inventory[i].quantity = updatedQuantity;
        console.log("\n Quantity Updated:");
        inventory[i].displayBook();
        break;
    }
}
