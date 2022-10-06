const express = require("express");
const app = express();
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");
const cartController = require("./controllers/cartController");
const authController = require("./controllers/authController");
const errorHandler = require('./middlewares/error-handler')

//middlewares
app.use(express.json());
app.use(errorHandler);


app.route("/signup").post(authController.signup);
app.route("/login").post(authController.login);

app
  .route("/products")
  .get(productController.getProducts)
  .post(productController.postProducts)
  .delete(productController.deleteProduct);

app
  .route("/users")
  .post(userController.createUser) 
  .get(userController.getUsers)
  .delete(userController.deleteUser);


app.route("/user/:id").delete(userController.deleteUser);


// app
//   .route("/cart")
//   .get(cartController.getCartItems)
//   .post(cartController.populateCart);

app
  .route("/cart/:id")
  .get(authController.protect, cartController.getCartItems)
  .patch(authController.protect,cartController.addItemTocart)
  .delete(cartController.removeItemFromCart);

module.exports = app;
