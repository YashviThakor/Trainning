import { showToast } from "../src/functions";
jest.mock("toastify-js", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    showToast: jest.fn(),
  })),
}));

describe("Utility Functions", () => {
  test("showToast should be called without errors", () => {
    expect(() => showToast("Test Message")).not.toThrow();
  });
});
