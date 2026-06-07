// Step 2:
const products = [
  { name: "Laptop",        category: "electronics", price: 999.99, inventory: 10 },
  { name: "Headphones",    category: "electronics", price: 149.99, inventory: 25 },
  { name: "Winter Jacket", category: "apparel",     price: 89.99,  inventory: 40 },
  { name: "Running Shoes", category: "apparel",     price: 64.99,  inventory: 30 },
  { name: "Rice (5 lb)",   category: "groceries",   price: 7.99,   inventory: 100 },
];

// Step 3:
for (const product of products) {
  let categoryDiscount = 0;

  switch (product.category) {
    case "electronics":
      categoryDiscount = 0.20;
      break;
    case "apparel":
      categoryDiscount = 0.15;
      break;
    case "groceries":
    case "household":
      categoryDiscount = 0.10;
      break;
    default:
      categoryDiscount = 0;
  }

  product.discountedPrice = product.price * (1 - categoryDiscount);
}

console.log("=== Products after category discounts ===");
products.forEach(p =>
  console.log(`${p.name}: $${p.price.toFixed(2)} → $${p.discountedPrice.toFixed(2)}`)
);

// ─── Step 4:
function getCustomerDiscount(customerType) {
  if (customerType === "student") {
    return 0.05;
  } else if (customerType === "senior") {
    return 0.07;
  } else {
    return 0;
  }
}

// ─── Step 5:
const customers = [
  { number: 1, type: "regular" },
  { number: 2, type: "student" },
  { number: 3, type: "senior"  },
];

console.log("\n=== Checkout Simulation ===");

for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  const extraDiscount = getCustomerDiscount(customer.type);
  let cartTotal = 0;

  for (const product of products) {
    if (product.inventory > 0) {
      const finalPrice = product.discountedPrice * (1 - extraDiscount);
      cartTotal += finalPrice;
      product.inventory--;
    }
  }

  console.log(
    `Customer #${customer.number} (${customer.type}) | Total: $${cartTotal.toFixed(2)}`
  );
}

// Step 6:
console.log("\n=== Product detail (for...in) — Laptop ===");
const featuredProduct = products[0];
for (const key in featuredProduct) {
  console.log(`  ${key}: ${featuredProduct[key]}`);
}

// Step 7:
console.log("\n=== All products after inventory update (Object.entries) ===");
for (const product of products) {
  const entries = Object.entries(product);
  const details = entries.map(([key, value]) => `${key}: ${value}`).join(" | ");
  console.log(details);
}