import { fetchAllProducts, fetchProductById, fetchCategories } from "../src/api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: "Test Product", price: 10, image: "test.jpg" }]),
  })
) as jest.Mock;

describe("API Functions", () => {
  test("fetchAllProducts should return a list of products", async () => {
    const products = await fetchAllProducts();
    expect(Array.isArray(products)).toBe(true);
    expect(products[0]).toHaveProperty("id");
    expect(products[0]).toHaveProperty("title");
  });

  test("fetchProductById should return a single product", async () => {
    const product = await fetchProductById(1);
    expect(product).toHaveProperty("id", 1);
  });

  test("fetchCategories should return a list of categories", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(["electronics", "jewelery", "men's clothing"]),
      })
    ) as jest.Mock;

    const categories = await fetchCategories();
    expect(Array.isArray(categories)).toBe(true);
    expect(categories).toContain("electronics");
  });
});
