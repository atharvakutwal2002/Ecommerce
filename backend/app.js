const express = require("express");
const app = express();
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");
const cartController = require("./controllers/cartController");
const authController= require('./controllers/authController')

app.use(express.json());

app.route("/signup").post(authController.signup)

app
  .route("/products")
  .get(productController.getProducts)
  .post(productController.postProducts);

app
  .route("/users")
  .post(userController.createUser)
  .get(userController.getUsers);

// app
//   .route("/cart")
//   .get(cartController.getCartItems)
//   .post(cartController.populateCart);

app
  .route("/cart/:id")
  .get(cartController.getCartItems)
  .patch(cartController.addItemTocart);


module.exports = app;
