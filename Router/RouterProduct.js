import express from "express";
import productModel from "../Model/ModelProducts.js";
const routesProduct = express.Router();

routesProduct.get("/", async (req, res) => {
  const data = await productModel.find({});
  res.status(200).send(data);
});
routesProduct.get("/:id", async (req, res) => {
  const id = req.params.id;
  const dataID = await productModel.findById(id);
  if (dataID) {
    res.status(200).send({
      _id: dataID._id,
      name: dataID.name,
      image: dataID.image,
      brand: dataID.brand,
      price: dataID.price,
      category: dataID.category,
      countInStock: dataID.countInStock,
      description: dataID.description,
    });
  } else if (data) {
  } else {
    res.status(404).send({ pesan: "data tidak ditemukan" });
  }
});
routesProduct.delete("/:id", async (req, res) => {
  const product = await productModel.findById(req.params.id);
  // tetap yg melakukan operasi edit hapus ialah database nya
  if (product) {
    const deleteProduct = await product.remove();
    res.send({ message: "data berhasil di hapus", product: deleteProduct });
  } else {
    res.status(404).send({ message: "Halaman tidak ditemukan" });
  }
});
routesProduct.post("/", async (req, res) => {
  const dataupload = req.body;
  await productModel.create(dataupload, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.status(200).send(data);
    }
  });
});

export default routesProduct;
