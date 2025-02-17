var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://fakestoreapi.com";
export function fetchAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Fetching all products from ${BASE_URL}/products`);
        const response = yield fetch(`${BASE_URL}/products`);
        return response.json();
    });
}
export function fetchProductById(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`GET /products/${productId}`);
        const response = yield fetch(`${BASE_URL}/products/${productId}`);
        return response.json();
    });
}
export function fetchCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Fetching product categories from ${BASE_URL}/products/categories`);
        const response = yield fetch(`${BASE_URL}/products/categories`);
        return response.json();
    });
}
export function fetchProductsByCategory(category) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`GET /products/category/${category}`);
        const response = yield fetch(`${BASE_URL}/products/category/${category}`);
        return response.json();
    });
}
export function fetchLimitedProducts(limit) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`GET /products?limit=${limit}`);
        const response = yield fetch(`${BASE_URL}/products?limit=${limit}`);
        return response.json();
    });
}
export function createProduct(productData) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`POST /products`);
        const response = yield fetch(`${BASE_URL}/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
        });
        return response.json();
    });
}
export function updateProduct(productId, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`PUT /products/${productId}`, updatedData);
        const response = yield fetch(`${BASE_URL}/products/${productId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        });
        return response.json();
    });
}
export function updatePartialProduct(productId, partialData) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`PATCH /products/${productId}`, partialData);
        const response = yield fetch(`${BASE_URL}/products/${productId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(partialData),
        });
        return response.json();
    });
}
export function deleteProduct(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`DELETE /products/${productId}`);
        const response = yield fetch(`${BASE_URL}/products/${productId}`, {
            method: "DELETE",
        });
        return response.json();
    });
}
