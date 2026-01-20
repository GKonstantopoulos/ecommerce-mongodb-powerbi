// Use database
db = db.getSiblingDB("eshop");

// Products
db.products.insertMany([
  {
    name: "iPad 10th Gen",
    sku: "IPAD-001",
    cost_price: 350,
    selling_price: 399,
    category: "Tablets",
    store_stock: [
      { store_id: "ATH-001", stock_qty: 10, reorder_threshold: 5 },
      { store_id: "THS-001", stock_qty: 5, reorder_threshold: 3 }
    ]
  },
  {
    name: "Laptop Dell Inspiron 15.6",
    sku: "LAP-001",
    cost_price: 700,
    selling_price: 859,
    category: "Laptops",
    store_stock: [
      { store_id: "ATH-001", stock_qty: 5, reorder_threshold: 2 },
      { store_id: "THS-001", stock_qty: 3, reorder_threshold: 2 }
    ]
  },
  {
    name: "iPhone 17 Pro",
    sku: "IPH-001",
    cost_price: 1080,
    selling_price: 1310,
    category: "Smartphones",
    store_stock: [
      { store_id: "ATH-001", stock_qty: 8, reorder_threshold: 4 },
      { store_id: "THS-001", stock_qty: 4, reorder_threshold: 2 }
    ]
  },
  {
    name: "Desktop Ultra PC",
    sku: "DESK-001",
    cost_price: 800,
    selling_price: 1050,
    category: "Computers",
    store_stock: [
      { store_id: "ATH-001", stock_qty: 4, reorder_threshold: 2 },
      { store_id: "THS-001", stock_qty: 2, reorder_threshold: 1 }
    ]
  },
  {
    name: "Bluetooth Headset",
    sku: "AUD-001",
    cost_price: 20,
    selling_price: 35,
    category: "Audio",
    store_stock: [
      { store_id: "ATH-001", stock_qty: 25, reorder_threshold: 10 },
      { store_id: "THS-001", stock_qty: 15, reorder_threshold: 8 }
    ]
  },
  {
    name: "On-ear Headphones",
    sku: "AUD-002",
    cost_price: 30,
    selling_price: 55,
    category: "Audio",
    store_stock: [
      { store_id: "ATH-001", stock_qty: 15, reorder_threshold: 6 },
      { store_id: "THS-001", stock_qty: 10, reorder_threshold: 5 }
    ]
  },
  {
    name: "Xiaomi Smart Band 10",
    sku: "XSB-001",
    cost_price: 38,
    selling_price: 55,
    category: "SmartWatch",
    store_stock: [
      { store_id: "ATH-001", stock_qty: 6, reorder_threshold: 3 },
      { store_id: "THS-001", stock_qty: 4, reorder_threshold: 2 }
    ]
  }
]);
