import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  reviewer: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);