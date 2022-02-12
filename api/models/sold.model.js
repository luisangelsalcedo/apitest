import mongoose from "mongoose";

// Schema product
const schemaSold = {
  id_client: String,
  created_at: { type: Date, default: Date.now() },
  total_value: Number,
  products: Array,
};

// Product model
const Sold = mongoose.model("sold", schemaSold, "sold");
export default Sold;
