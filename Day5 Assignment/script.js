import {
  fetchAllProducts,
  fetchCategories,
  fetchProductById,
  fetchProductsByCategory,
  fetchLimitedProducts,
  addProduct,
  updateProduct,
  patchProduct,
  deleteProduct,
} from "./api.js";

import { renderContent, showToast } from "./functions.js";

const cart = [];
document.getElementById("fetch-products-btn").addEventListener("click", async () => {
  try {
    const products = await fetchAllProducts();
    displayProducts(products);
    showToast("Products loaded successfully!");
  } catch (error) {
    console.error("Error fetching products:", error);
    showToast("Failed to load products", "error");
  }
});
document.getElementById("fetch-categories-btn").addEventListener("click", async () => {
  try {
    const categories = await fetchCategories();
    displayCategories(categories);
    showToast("Categories loaded successfully!");
  } catch (error) {
    console.error("Error fetching categories:", error);
    showToast("Failed to load categories", "error");
  }
});
function addToCart(productId) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity += 1;
    showToast("Product quantity updated in cart!");
  } else {
    cart.push({ id: productId, quantity: 1 });
    showToast("Product added to cart!");
  }
  console.log("Cart:", cart);
}
function buyNow(productId) {
  showToast(`You bought product with ID ${productId}!`);
  console.log(`Product with ID ${productId} purchased.`);
}

function displayProducts(products) {
  const html = products
    .map(
      (product) => `
      <div class="card">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="buyNow(${product.id})">Buy Now</button>
      </div>`
    )
    .join("");
  renderContent("product-list", html);
}
function displayCategories(categories) {
  const html = `<ul>${categories.map((cat) => `<li>${cat}</li>`).join("")}</ul>`;
  renderContent("product-list", html);
}

window.addToCart = addToCart;
window.buyNow = buyNow; 
