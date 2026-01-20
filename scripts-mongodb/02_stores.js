// Use database
db = db.getSiblingDB("eshop");

// Stores
db.stores.insertMany([
  {
    store_id: "ATH-001",
    name: "Athens e-Central Store",
    city: "Athens",
    address: "Ermou 15, Athens 10563"
  },
  {
    store_id: "THS-001",
    name: "Thessaloniki e-North Store",
    city: "Thessaloniki",
    address: "Aristotelous 8, Thessaloniki 54624"
  }
]);
