const Product= require('./../models/productModel')

exports.getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(201).send(products);
    } catch (err) {
      res.status(400).send(err);
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