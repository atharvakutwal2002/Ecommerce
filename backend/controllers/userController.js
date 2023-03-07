const User = require("./../models/userModel");
const Cart = require("../models/cartModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    const cart = await Cart.create({
      products: [],
      user: newUser._id,
    });

    res.status(201).json({ newUser, cart });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.id });
    // if (!cart) {
    //   return res.status(401).send("no cart found ");
    // }
    await Cart.findByIdAndDelete(cart._id);

    // const user = await User.findOne((_id = req.params.id));
    // if (!user) {
    //   return res.status(401).send("No user found ");
    // }

    await User.findByIdAndDelete(req.params.id);
    return res.status(201).send("user deleted successfully ");
  } catch (error) {
    return res.status(400).send("User not deleted . Some error occured ");
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUser = async (req, res) => {
  const { id: userId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    console.log(user);
    res.status(201).json({ user: user });
  } catch (error) {
    res.status(400).send(error);
  }
};
