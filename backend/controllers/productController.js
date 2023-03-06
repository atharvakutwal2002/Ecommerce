const Product = require("./../models/productModel");
const User = require("../models/userModel");
const {
  Types: { ObjectId },
} = require("mongoose");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).send(products);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getUsercartProducts = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("cartProducts")
      .exec();
    const products = user.cartProducts;
    return res
      .status(200)
      .json({ products, message: "fetched products successfully " });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error !" });
  }
};

exports.postProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.body.id);
    return res.status(201).send("Product deleted successfully ");
  } catch (error) {
    return res.status(401).send(error);
  }
};

const addproductToCart = async (req, res) => {
  let {
    params: { id: productId },
    user,
  } = req;
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

exports.getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ _id: id });
    if (!product) {
      return res.status(201).json(message, "no such product found");
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error);
  }
};
