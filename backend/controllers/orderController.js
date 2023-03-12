const Cart = require("./../models/cartModel");
const Product = require("./../models/productModel");
const User = require("../models/userModel");
const Order = require("./../models/orderModel");
const stripe = require("stripe")(process.env.STRIPEAPIKEY);

exports.get_orders = async (req, res) => {
  const userId = req.params.id;
  Order.find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};



exports.createOrder = async (req, res) => {
  const userId = req.params.id;
  try {
    const newOrder = await Order.create({ userId, ...req.body });
    res.status(200).json({ newOrder });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.getOrders = async (req, res) => {
  const userId = req.params.id;
  try {
    const userOrders = await Order.find({ userId });
    return res.status(200).json({userOrders})
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
