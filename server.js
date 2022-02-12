import express from "express";
import mongoose from "mongoose";
// import { productCtrl } from "./api/controllers/index.js";
// const { getAllProducts, getOneProduct, createProduct } = productCtrl;

import { productRouter, soldRouter } from "./api/routes/index.js";

const app = express();

// Connect to db
await mongoose.connect(
  "mongodb+srv://admin:4dm1n@products.bnrj3.mongodb.net/products"
);

// Listener to connection error
mongoose.connection.on("error", e => {
  console.log("Error: ", e);
});

// Middleware
app.use(express.json());

// // Middleware Route
// const m1 = (req, res, next) => {
//   console.log("Middleware 1");
//   req.body.product = { id: "122345" };
//   // res.send("Middleware");
//   next();
// };

// const m2 = (req, res, next) => {
//   console.log("Middleware 2", req.body);
//   res.send("Middleware");
// };

// app.get("/middleware", m1, m2);

// Routes
app.get("/", (request, response) => {
  response.send("hola mundo");
});

// Router
app.use("/api", productRouter);
app.use("/api", soldRouter);

// app.get("/api/products", getAllProducts);
// app.get("/api/products/:id", getOneProduct);
// app.post("/api/products/create", createProduct);

// variable de entorno
const PORT = process.env.PORT || 5000;

// Launching server
app.listen(PORT, () => {
  console.log("Iniatialized server");
});
