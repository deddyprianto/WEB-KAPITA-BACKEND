import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routeLogin from "./Router/RouteLogin.js";
import routesProduct from "./Router/RouterProduct.js";

// app config
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(cors());
// DB config
const passDB = `WzKQDlKCg26qgvft`;
const dbURI = `mongodb+srv://amazona:${passDB}@cluster0.poinn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(dbURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.createConnection(dbURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.once("open", () => {
  console.log(`db connected`);
});
// api routess
app.use("/api/backend", routeLogin);
app.use("/api/backend/product", routesProduct);
// listen
app.listen(port, () => console.log("CONECTED TO SERVER"));
