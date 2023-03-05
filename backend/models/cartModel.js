const mongoose = require("mongoose");

// const cartSchema = mongoose.Schema({
//   products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   }
// });

const cartSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity cannot be less than 1 ."],
        default: 1,
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
