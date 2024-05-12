import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  location: { type: String, require: true },
  place: { type: String, require: true },
  text: { type: String, require: true },
  heart: { type: Number },
});

export default model("Review", reviewSchema);
