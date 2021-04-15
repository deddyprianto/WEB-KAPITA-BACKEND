import express from "express";
import modelLogin from "../Model/ModelLogin.js";
const routeLogin = express.Router();

routeLogin.post("/login", async (req, res) => {
  const data = await modelLogin.findOne({
    username: req.body.username,
    pass: req.body.pass,
  });
  if (data) {
    res.status(200).send({
      _id: data._id,
      username: data.username,
      email: data.email,
    });
  } else {
    res.status(401).send({ pesan: "password dan email kamu salah" });
  }
});
routeLogin.post("/", async (req, res) => {
  const data = req.body;
  await modelLogin.create(data, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
export default routeLogin;
