import mongoose from "mongoose";

// Schema product
const schemaProducts = {
  ref: String,
  name: String,
  description: String,
  create_at: { type: Date, default: Date.now() },
  price: Number,
  discount: Number,
  active: Boolean,
};

// Product model
const Product = mongoose.model("product", schemaProducts, "product");
export default Product;
