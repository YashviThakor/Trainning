const products = [
    { name: "Apple", price: 20, category: "Fruits" },
    { name: "Banana", price: 10, category: "Fruits" },
    { name: "Carrot", price: 15, category: "Vegetables" },
    { name: "Tomato", price: 30, category: "Vegetables" },
    { name: "Milk", price: 40, category: "Dairy" },
    { name: "Cheese", price: 20, category: "Dairy" },
    { name: "Chips", price: 30, category: "Snacks" },
    { name: "Cookies", price: 50, category: "Snacks" }
];
//Task 1 
const namesUppercase = products.map(product => product.name.toUpperCase());
console.log("Task 1: Product names in uppercase ", namesUppercase);
//Task 2
const snackProducts = products.filter(product => product.category === "Snacks");
console.log("Task 2: Snack products ", snackProducts);
// Task 3
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Task 3: Total price of products ", totalPrice);
// Task 4
function totalPriceByCategory(category) {
    return products
        .filter(product => product.category === category)
        .map(product => product.price)
        .reduce((total, price) => total + price, 0);
    const totalFruitsPrice = totalPriceByCategory("Fruits");
    console.log("Task 4: Total price of Fruit products:", totalFruitsPrice);
}