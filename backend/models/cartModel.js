const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
