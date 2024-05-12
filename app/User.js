import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  gender: { type: String },
  birth: { type: String },
  phoneNum: { type: String, require: true },
  password: { type: String, require: true },
  foreign: { type: Boolean },
  isLogin: { type: Boolean },
});

export default model("User", userSchema);
