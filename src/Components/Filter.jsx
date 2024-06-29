const Product = [
    {
      "id": 1,
      "name": "T-Shirt",
      "description": "Comfortable cotton T-Shirt",
      "price": 19.99,
      "category": "Clothing",
      "inStock": true
    },
    {
      "id": 2,
      "name": "Wireless Headphones",
      "description": "High-fidelity sound with Bluetooth connectivity",
      "price": 79.95,
      "category": "Electronics",
      "inStock": false
    },
    {
      "id": 3,
      "name": "Coffee Mug",
      "description": "Insulated mug to keep your drink hot or cold",
      "price": 12.50,
      "category": "Kitchen",
      "inStock": true
    },
    {
      "id": 4,
      "name": "Laptop Backpack",
      "description": "Durable backpack with padded compartments",
      "price": 49.99,
      "category": "Accessories",
      "inStock": true
    },
    {
      "id": 5,
      "name": "Notebook",
      "description": "Lined notebook for writing and journaling",
      "price": 5.99,
      "category": "Office Supplies",
      "inStock": true
    },
    {
      "id": 6,
      "name": "Water Bottle",
      "description": "Reusable water bottle for hydration on the go",
      "price": 14.95,
      "category": "Kitchen",
      "inStock": false
    },
    {
      "id": 7,
      "name": "Desk Lamp",
      "description": "Adjustable desk lamp for better lighting",
      "price": 24.99,
      "category": "Office Supplies",
      "inStock": true
    },
    {
      "id": 8,
      "name": "Wireless Charger",
      "description": "Convenient way to charge your phone wirelessly",
      "price": 39.99,
      "category": "Electronics",
      "inStock": true
    },
    {
      "id": 9,
      "name": "Sunglasses",
      "description": "Stylish sunglasses for sun protection",
      "price": 29.95,
      "category": "Accessories",
      "inStock": true
    },
    {
      "id": 10,
      "name": "Mousepad",
      "description": "Comfortable mousepad for improved control",
      "price": 9.99,
      "category": "Office Supplies",
      "inStock": true
    }
  ]

  function Filter() {
    return (
      <ul>
        {/* Display all products */}
        {Product.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> | Description: {product.description} | Price: ${product.price.toFixed(2)} {/* Format price with 2 decimal places */}
          </li>
        ))}
        <h1>-----</h1>
  
        {/* Filter products for Office Supplies category */}
        <h2>Office Supplies</h2>
        <ul>
          {Product.filter((product) => product.category === "Office Supplies").map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> | Description: {product.description} | Price: ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </ul>
    );
  }
  export default Filter;