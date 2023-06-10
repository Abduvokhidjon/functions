// test for your function on calculating total cost of products
// Import the function to be tested
const product = require("./calculateTotalCost.js");

// Describe the test suite
describe("calculateTotalCost", () => {
    // Test case 1: Empty array should return 0
    test("should return 0 for an empty array", () => {
        const products = [];
        const totalCost = calculateTotalCost(products);
        expect(totalCost).toBe(0);
    });

    // Test case 2: Valid products with different prices and quantities
    test("should calculate the correct total cost for valid products", () => {
        const products = [
            { name: "Product 1", price: 10, quantity: 3 },
            { name: "Product 2", price: 5, quantity: 2 },
            { name: "Product 3", price: 8, quantity: 1 },
            { name: "Product 4", price: 15, quantity: 4 },
        ];
        const totalCost = calculateTotalCost(products);
        expect(totalCost).toBe(108);
    });

    // Test case 3: Invalid product with missing price and quantity
    test("should skip invalid product and calculate total cost", () => {
        const products = [
            { name: "Valid Product", price: 10, quantity: 2 },
            { name: "Invalid Product", price: "abc", quantity: "xyz" },
        ];
        const totalCost = calculateTotalCost(products);
        expect(totalCost).toBe(20);
    });

    // Test case 4: Product with highest price
    test("should find the product with the highest price", () => {
        const products = [
            { name: "Product 1", price: 10, quantity: 2 },
            { name: "Product 2", price: 5, quantity: 3 },
            { name: "Product 3", price: 15, quantity: 1 },
        ];
        const consoleLogSpy = jest.spyOn(console, "log");
        const totalCost = calculateTotalCost(products);
        expect(totalCost).toBe(50);
        expect(consoleLogSpy).toHaveBeenCalledWith(
            "Product with highest price: Product 3"
        );
        consoleLogSpy.mockRestore();
    });
});