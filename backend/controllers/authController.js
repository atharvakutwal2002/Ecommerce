const User = require("./../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
    next();
  } catch (err) {
    res.status(401).send(err);
  }
};
