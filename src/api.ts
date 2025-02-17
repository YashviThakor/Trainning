const BASE_URL = "https://fakestoreapi.com";

export async function fetchAllProducts() {
  console.log(`Fetching all products from ${BASE_URL}/products`);
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
}
export async function fetchProductById(productId: number) {
  console.log(`GET /products/${productId}`);
  const response = await fetch(`${BASE_URL}/products/${productId}`);
  return response.json();
}
export async function fetchCategories() {
  console.log(`Fetching product categories from ${BASE_URL}/products/categories`);
  const response = await fetch(`${BASE_URL}/products/categories`);
  return response.json();
}
export async function fetchProductsByCategory(category: string) {
  console.log(`GET /products/category/${category}`);
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  return response.json();
}
export async function fetchLimitedProducts(limit: number) {
  console.log(`GET /products?limit=${limit}`);
  const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
  return response.json();
}
export async function createProduct(productData: object) {
  console.log(`POST /products`);
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  return response.json();
}
export async function updateProduct(productId: number, updatedData: object) {
  console.log(`PUT /products/${productId}`, updatedData);
  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return response.json();
}
export async function updatePartialProduct(productId: number, partialData: object) {
  console.log(`PATCH /products/${productId}`, partialData);
  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partialData),
  });
  return response.json();
}
export async function deleteProduct(productId: number) {
  console.log(`DELETE /products/${productId}`);
  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "DELETE",
  });
  return response.json();
}
