import mongoose from "mongoose";
const modelSchemaLogin = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  pass: { type: String, required: true },
});
const modelLogin = mongoose.model("Login", modelSchemaLogin);
export default modelLogin;
