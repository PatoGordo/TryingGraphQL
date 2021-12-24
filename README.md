```graphql
mutation SetProduct {
  createProduct(
    name: "salt",
    price: 2.5,
    inventoryAvailability: 253
  ) {
    id,
    name,
    price,
    inventoryAvailability
  }
}

query GetProducts {
  products {
    id, name, price, inventoryAvailability
  }
}
```