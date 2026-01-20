// Use database
db = db.getSiblingDB("eshop");

// Users / Customers
db.customers.insertMany([
  { _id: ObjectId("64d9a0010000000000000001"), first_name: "John", last_name: "Papadopoulos", email: "johnpap@gmail.com", password_hash: "hashed_password_example", city: "Athens", shipping_address: "Patision 42, Athens 10433", role: "customer" },
  { _id: ObjectId("64d9a0010000000000000002"), first_name: "Maria", last_name: "Ioannou", email: "mariaioannou@gmail.com", password_hash: "hashed_password_example", city: "Athens", shipping_address: "Kanari 125, Athens 11741", role: "customer" },
  { _id: ObjectId("64d9a0010000000000000003"), first_name: "Nikos", last_name: "Konstantinou", email: "nikoskon@gmail.com", password_hash: "hashed_password_example", city: "Patras", shipping_address: "Korinthou 28, Patras 26221", role: "customer" },
  { _id: ObjectId("64d9a0010000000000000004"), first_name: "Eleni", last_name: "Markaki", email: "elenimarkaki@gmail.com", password_hash: "hashed_password_example", city: "Rhodes", shipping_address: "Ierou Lochou 15, Rhodes 85100", role: "customer" },
  { _id: ObjectId("64d9a0010000000000000005"), first_name: "Dimitris", last_name: "Georgiou", email: "dimgeorgiou@gmail.com", password_hash: "hashed_password_example", city: "Xanthi", shipping_address: "Ethnikis Antistasis 7, Xanthi 67100", role: "customer" }
]);
