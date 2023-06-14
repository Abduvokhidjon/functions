// Write a JavaScript program that takes an array of objects, where each
// object represents a product with properties like name, price, and quantity.
// Calculate and display the total cost of all the products (price * quantity).
// Additionally, find and display the product with the highest price.

// Ensure that the program handles empty arrays and invalid values for price and quantity
// gracefully, displaying appropriate error messages.

// Hints:
// - Use a loop to iterate over the array and access each object's properties.
// - Keep track of the running total cost and update it for each product.
// - Compare prices to find the product with the highest price, keeping track of the
// maximum price and the corresponding product.

const products = [
  { name: "Nexia", price: 8970, quantity: 5 },
  { name: "Malibu", price: 29850, quantity: 20 },
  { name: "Gentr", price: 14380, quantity: 17 },
];
// highestPrice = Math.max(...products.price);
function calculateTotalCost(products) {
  if (products.length === 0) {
    return 0;
  }
  var totalPriceofInventory = 0;
  var highestPrice = 0;
  var highestPriceProduct;
  var totalPriceofEachInventory = 0;
  for (i = 0; i < products.length; i++) {
    if (
      typeof products[i].price !== "number" &&
      typeof products[i].quantity !== "number"
    ) {
      continue;
    }
    if (highestPrice < products[i].price) {
      highestPrice = products[i].price;
      highestPriceProduct = products[i].name;
    }

    totalPriceofEachInventory = products[i].quantity * products[i].price;
    totalPriceofInventory += totalPriceofEachInventory;
  }
  console.log("Product with highest price: " + highestPriceProduct);
  return totalPriceofInventory;
}
// console.log("Product with highest price: " + highestPriceProduct);
console.log(calculateTotalCost(products));
module.exports = calculateTotalCost;
