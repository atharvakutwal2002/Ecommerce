const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have  a  name "],
  },
  imageLink: {
    type: String,
    required: [true, "A product must have image"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  details: {
    type: String,
  },
});


const Product= mongoose.model("Product", productSchema);

module.exports=Product;