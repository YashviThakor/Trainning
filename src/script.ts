import {
  fetchAllProducts,
  fetchCategories,
} from "./api.js";

import { showToast } from "./functions.js";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const cart: { id: number; quantity: number }[] = [];
declare global {
  interface Window {
    addToCart: (productId: number) => void;
    buyNow: (productId: number) => void;
  }
}
function displayProducts(products: Product[]) {
  const productList = document.getElementById("product-list");

  if (!productList) {
    console.error("ERROR: No element found with ID 'product-list'");
    return;
  }

  productList.innerHTML = ""; 

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" width="100">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="window.addToCart(${product.id})">Add to Cart</button>
      <button onclick="window.buyNow(${product.id})">Buy Now</button>
    `;

    productList.appendChild(productCard);
  });
}
function displayCategories(categories: string[]) {
  const productList = document.getElementById("product-list");

  if (!productList) {
    console.error(" ERROR: No element found with ID 'product-list'");
    return;
  }
  productList.innerHTML = ""; 
  categories.forEach((category) => {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("category-card");
    categoryCard.innerHTML = `
      <h3>${category}</h3>
    `;
    productList.appendChild(categoryCard);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const fetchProductsBtn = document.getElementById("fetch-products-btn");
  const fetchCategoriesBtn = document.getElementById("fetch-categories-btn");
  if (fetchProductsBtn) {
    fetchProductsBtn.addEventListener("click", async () => {
      try {
        console.log("Fetching products...");
        const products = await fetchAllProducts();
        console.log("Products fetched:", products);
        displayProducts(products);
        showToast("Products loaded successfully!");
      } catch (error) {
        console.error("Error fetching products:", error);
        showToast("Failed to load products", "error");
      }
    });
  }
  if (fetchCategoriesBtn) {
    fetchCategoriesBtn.addEventListener("click", async () => {
      try {
        console.log("Fetching categories...");
        const categories = await fetchCategories();
        console.log("Categories fetched:", categories);
        displayCategories(categories);
        showToast("Categories loaded successfully!");
      } catch (error) {
        console.error("Error fetching categories:", error);
        showToast("Failed to load categories", "error");
      }
    });
  }
});
window.addToCart = function (productId: number) {
  console.log(`Adding product with ID ${productId} to cart`);
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity += 1;
    showToast("Product quantity updated in cart!");
  } else {
    cart.push({ id: productId, quantity: 1 });
    showToast("Product added to cart!");
  }
  console.log("Updated Cart:", cart);
};
window.buyNow = function (productId: number) {
  console.log(`Buying product with ID ${productId}`);
  showToast(`You bought product with ID ${productId}!`);
};
