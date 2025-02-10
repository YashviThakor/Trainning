const BASE_URL = "https://fakestoreapi.com";

export async function fetchAllProducts() {
  console.log("GET /products");
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
}

export async function fetchProductById(productId) {
  console.log(`GET /products/${productId}`);
  const response = await fetch(`${BASE_URL}/products/${productId}`);
  return response.json();
}

export async function fetchCategories() {
  console.log("GET /products/categories");
  const response = await fetch(`${BASE_URL}/products/categories`);
  return response.json();
}

export async function fetchProductsByCategory(category) {
  console.log(`GET /products/category/${category}`);
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  return response.json();
}

export async function fetchLimitedProducts(limit) {
  console.log(`GET /products?limit=${limit}`);
  const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
  return response.json();
}

export async function addProduct(newProduct) {
  console.log("POST /products:", newProduct);
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  return response.json();
}

export async function updateProduct(productId, updatedData) {
  console.log(`PUT /products/${productId}:`, updatedData);
  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return response.json();
}

export async function patchProduct(productId, partialData) {
  console.log(`PATCH /products/${productId}:`, partialData);
  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partialData),
  });
  return response.json();
}
export async function deleteProduct(productId) {
  console.log(`DELETE /products/${productId}`);
  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "DELETE",
  });
  return response.json();
}
