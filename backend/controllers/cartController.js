const Cart = require("./../models/cartModel");
const Product= require('./../models/productModel');

// exports.populateCart = async (req, res) => {
//   try {
//     const cartContainer = await Cart.create(req.body);
//     res.status(201).json(cartContainer);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// exports.getCartItems = async (req, res) => {
//   try {
//     const cartItems = await Cart.findById();
//     res.status(201).json(cartItems);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

exports.getCartItems= async (req, res) => {
    const {id: userId} = req.params;

  try {
    const cart = await Cart.findOne({user: userId});

    if(!cart){
        return res.status(400).json({message: "Cart does not exist."});
    }

    await cart.populate('products');

    res.status(201).json({cart});
  } catch (error) {
      console.log(error)
    res.status(500).send(error);
  }
};

exports.addItemTocart=async(req, res)=>{
    const {id: userId} = req.params;
    const {productId} = req.body;
    try {
        const cart = await Cart.findOne({user: userId});
        const product = await Product.findById(productId)
        
        if(!product){
            return res.status(404).json({message: "Product does not exist."})
        }

        cart.products.push(product._id);

        await cart.save();
        res.json({cart})
    } catch (error) {
        res.status(400).send(error);
    }
}