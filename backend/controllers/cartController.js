const Cart = require("./../models/cartModel");
const Product = require("./../models/productModel");

exports.getCartItems = async (req, res) => {
  const  userId  = req.params.id;
  console.log(userId)
  try {
    const cart = await Cart.findOne({ userId });
    console.log(cart);

    if (!cart) {
      return res.status(400).json({ message: "Cart does not exist." });
    }

    if (cart && cart.items.length > 0) {
      res.json({cart});
    } else {
      res.json(null);
    }

    // await cart.populate("products");

    // res.status(201).json({ cart });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.addItemTocart = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    const product = await Product.findById(productId);
    

    if (!product) {
      return res.status(404).json({ message: "Product does not exist." });
    }

    const price = product.price;
    const name = product.name;
    const image= product.imageLink;


    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId == productId);
      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        productItem.quantity += quantity;
        cart.items[itemIndex] = productItem;
      } else {
        cart.items.push({ productId, name, quantity, price ,image });
      }
      cart.bill += (quantity ? quantity : 1) * price;
      await cart.save();
      res.json({ cart });
    } else {
      const newCart = await Cart.create({
        userId,
        items: [{ productId, name, quantity, price, image}],
        bill: quantity * price,
      });
      console.log(newCart);
      return res.status(201).send(newCart);
    }
   
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

// exports.removeItemFromCart = async (req, res) => {
//   const userId = req.params.id;
//   const productId = req.params.productId;
//   try {
//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(402).send("Cart does not exists");
//     }
//     let itemIndex = cart.items.findIndex((p) => p.productId == productId);

//     if (itemIndex > -1) {
//       let productItem = cart.items[itemIndex];
//       cart.bill -= productItem.quantity * productItem.price;
//       cart.items.splice(itemIndex, 1);
//     }
//     cart = await cart.save();
//     return res.status(201).send(cart);

//     // cart.products = cart.products.filter((el) => {
//     //   el._id !== req.body.id;
//     // });
//     // await cart.save();
//     // await cart.populate("products");
//     // res.status(200).json(cart);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

exports.removeItemFromCart = async (req, res) => {
  const { id: userId } = req.params;
  const { productId } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).send("Cart does not exist");
    }
    const itemIndex = cart.items.findIndex((p) => p.productId === productId);
    if (itemIndex > -1) {
      const productItem = cart.items[itemIndex];
      cart.bill -= productItem.quantity * productItem.price;
      cart.items.splice(itemIndex, 1);
    }
    await cart.save();
    return res.status(201).send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
};
