const Cart = require("./../models/cartModel");
const Product = require("./../models/productModel");

exports.getCartItems = async (req, res) => {
  const { id: userId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(400).json({ message: "Cart does not exist." });
    }

    await cart.populate("products");

    res.status(201).json({ cart });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.addItemTocart = async (req, res) => {
  const { id: userId } = req.params;
  const { productId } = req.body;
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product does not exist." });
    }

    cart.products.push(product._id);

    await cart.save();
    res.json({ cart });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.removeItemFromCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(402).send("Cart does not exists");
    }
    cart.products=cart.products.filter((el) => {
      el._id !== req.body.id;
    });
    await cart.save();
    await cart.populate("products");
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).send(error);
  }
};
