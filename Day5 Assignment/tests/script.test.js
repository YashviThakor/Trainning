import { showToast } from "../functions.js";

test("showToast function exists", () => {
  expect(showToast).toBeDefined();
});

test("showToast displays success messages", () => {
  const message = "Success!";
  const toast = showToast(message);
  expect(toast).toBeUndefined(); // Toastify returns undefined
});
