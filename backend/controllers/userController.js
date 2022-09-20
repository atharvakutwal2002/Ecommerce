const User = require("./../models/userModel");
const Cart = require("../models/cartModel")

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    const cart = await Cart.create({
      products: [],
      user: newUser._id
    })

    res.status(201).json({newUser, cart});
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users =await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(400).send(error);
  }
};
