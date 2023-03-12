const express = require("express");
const cors = require("cors");
const app = express();
const productController = require("./controllers/productController");
const orderController = require("./controllers/orderController");
const userController = require("./controllers/userController");
const cartController = require("./controllers/cartController");
const authController = require("./controllers/authController");
const errorHandler = require("./middlewares/error-handler");

//middlewares
app.use(express.json());
app.use(errorHandler);
app.use(cors());

app.route("/signup").post(authController.signup);
app.route("/login").post(authController.login);

app
  .route("/products")
  .get(productController.getAllProducts)
  .post(productController.postProducts)
  .delete(productController.deleteProduct);

// app.route("/products/:id").delete(productController.deleteProduct);

app.route("/product/:id").get(productController.getSingleProduct);

app
  .route("/users")
  .post(userController.createUser)
  .get(userController.getUsers)
  .delete(userController.deleteUser);

app.route("/user/:id").get(userController.getUser);

// app.route("/user/:id").delete(userController.deleteUser);

// app
//   .route("/cart")
//   .get(cartController.getCartItems)
//   .post(cartController.populateCart);

app
  .route("/cart/:id")
  .post(authController.protect, cartController.addItemTocart)
  .get(authController.protect, cartController.getCartItems)
  .delete( cartController.removeItemFromCart);
// .patch(authController.protect, cartController.addItemTocart)

// app
//   .route("/order/:id")
//   .get(orderController.get_orders)
//   .post(orderController.checkout);

app
  .route("/order/:id")
  .post(orderController.createOrder)
  .get(orderController.getOrders);

module.exports = app;
