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

 

let products = [
  { name: "Nexia", price: 8970, quantity: 5 },
  { name: "Malibu", price: 29850, quantity: 20 },
  { name: "Gentr", price: 14380, quantity: 17 },
];
function calculateTotalCost(products) {
  if (products.lenght === 0) {
    return 0; 
  } else {
  var totalPriceofInventory = 0;
  for (i = 0; i < products.length; i++) {
    sum = products[i].quantity * products[i].price;
    totalPriceofInventory += sum;
    // console.log("Total cost of " + products[i].name + " is " + sum);
  }

  return totalPriceofInventory
  // console.log("Total cost of inventory is " + totalPriceofInventory);
}
}
totalPriceofInventory = calculateTotalCost(products);
console.log(totalPriceofInventory)
module.exports = calculateTotalCost;