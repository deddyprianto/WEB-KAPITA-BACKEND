import mongoose from "mongoose";
const dbProducts = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, required: true },
  description: { type: String, required: true },
});
const productModel = mongoose.model("Product", dbProducts);
export default productModel;
