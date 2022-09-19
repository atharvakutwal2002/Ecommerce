const express = require("express");
const app = express();
const productController = require("./controllers/productController");
const bodyParser = require("body-parser");

app.use(express.json());


app
  .route("/products")
  .get(productController.getProducts)
  .post(productController.postProducts);



module.exports = app;
