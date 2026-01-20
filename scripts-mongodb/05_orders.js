// Use database
db = db.getSiblingDB("eshop");

// Orders
db.orders.insertMany([
  {
    order_number: "ORD-ATH-EXP",
    customer_id: ObjectId("64d9a0010000000000000002"),
    customer_name: "Maria Ioannou",
    customer_city: "Athens",
    shipping_city: "Athens",
    store_id: "ATH-001",
    store_city: "Athens",
    items: [
      { product: "Laptop Dell Inspiron 15.6", qty: 1, price: 859, sku: "LAP-001" }
    ],
    total_amount: 859,
    payment_method: "Credit Card",
    order_date: ISODate("2025-12-20T10:00:00Z"),
    shipping_date: ISODate("2025-12-21T09:00:00Z"),
    delivery_date: ISODate("2025-12-21T17:00:00Z"),
    shipping_method: "Express",
    status: "Delivered"
  },
  {
    order_number: "ORD-THS-EXP",
    customer_id: ObjectId("64d9a0010000000000000005"),
    customer_name: "Dimitris Georgiou",
    customer_city: "Xanthi",
    shipping_city: "Xanthi",
    store_id: "THS-001",
    store_city: "Thessaloniki",
    items: [
      { product: "iPhone 17 Pro", qty: 1, price: 1310, sku: "IPH-001" }
    ],
    total_amount: 1310,
    payment_method: "Credit Card",
    order_date: ISODate("2025-12-22T11:00:00Z"),
    shipping_date: ISODate("2025-12-23T09:00:00Z"),
    delivery_date: ISODate("2025-12-24T12:00:00Z"),
    shipping_method: "Express",
    status: "Delivered"
  },
  {
    order_number: "ORD-ATH-001",
    customer_id: ObjectId("64d9a0010000000000000001"),
    customer_name: "John Papadopoulos",
    customer_city: "Athens",
    shipping_city: "Athens",
    store_id: "ATH-001",
    store_city: "Athens",
    items: [
      { product: "iPad 10th Gen", qty: 1, price: 399, sku: "IPAD-001" },
      { product: "Bluetooth Headset", qty: 1, price: 35, sku: "AUD-001" }
    ],
    total_amount: 434,
    payment_method: "Credit Card",
    order_date: ISODate("2025-12-10T09:15:00Z"),
    shipping_date: ISODate("2025-12-11T09:00:00Z"),
    delivery_date: ISODate("2025-12-12T12:00:00Z"),
    shipping_method: "Standard",
    status: "Delivered"
  },
  {
    order_number: "ORD-ATH-2026",
    customer_id: ObjectId("64d9a0010000000000000003"),
    customer_name: "Nikos Konstantinou",
    customer_city: "Patras",
    shipping_city: "Patras",
    store_id: "ATH-001",
    store_city: "Athens",
    items: [
      { product: "Desktop Ultra PC", qty: 1, price: 1050, sku: "DESK-001" },
      { product: "Bluetooth Headset", qty: 2, price: 35, sku: "AUD-001" }
    ],
    total_amount: 1120,
    payment_method: "Credit Card",
    order_date: ISODate("2026-01-15T10:30:00Z"),
    shipping_date: ISODate("2026-01-16T09:00:00Z"),
    delivery_date: ISODate("2026-01-18T14:00:00Z"),
    shipping_method: "Standard",
    status: "Delivered"
  },
  {
    order_number: "ORD-THS-STD",
    customer_id: ObjectId("64d9a0010000000000000005"),
    customer_name: "Dimitris Georgiou",
    customer_city: "Xanthi",
    shipping_city: "Xanthi",
    store_id: "THS-001",
    store_city: "Thessaloniki",
    items: [
      { product: "Xiaomi Smart Band 10", qty: 1, price: 55, sku: "XSB-001" }
    ],
    total_amount: 55,
    payment_method: "Credit Card",
    order_date: ISODate("2026-01-02T20:00:00Z"),
    shipping_date: ISODate("2026-01-03T13:20:00Z"),
    delivery_date: ISODate("2026-01-05T18:30:00Z"),
    shipping_method: "Standard",
    status: "Pending"
  },
  {
    order_number: "ORD-ATH-004",
    customer_id: ObjectId("64d9a0010000000000000004"),
    customer_name: "Eleni Markaki",
    customer_city: "Rhodes",
    shipping_city: "Rhodes",
    store_id: "ATH-001",
    store_city: "Athens",
    items: [
      { product: "Xiaomi Smart Band 10", qty: 2, price: 55, sku: "XSB-001" }
    ],
    total_amount: 110,
    payment_method: "PayPal",
    order_date: ISODate("2025-12-13T12:00:00Z"),
    shipping_date: ISODate("2025-12-14T09:00:00Z"),
    delivery_date: ISODate("2025-12-16T14:00:00Z"),
    shipping_method: "Standard",
    status: "Delivered"
  }
]);