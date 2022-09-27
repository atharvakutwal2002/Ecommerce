const express = require("express");
const app = express();
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");
const cartController = require("./controllers/cartController");
const authController = require("./controllers/authController");

app.use(express.json());

app.route("/signup").post(authController.signup);
app.route("/login").post(authController.login);

app
  .route("/products")
  .get(productController.getProducts)
  .post(productController.postProducts)
  .delete(authController.protect, productController.deleteProduct);

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
  .get(authController.protect, cartController.getCartItems)
  .patch(authController.protect, cartController.addItemTocart);

module.exports = app;
