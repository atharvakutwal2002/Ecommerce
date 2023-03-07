const util = require("util");
const User = require("./../models/userModel");
const Cart = require("./../models/cartModel");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    const cart = await Cart.create({
      products: [],
      user: newUser._id,
    });

    const token = signToken(newUser._id);

    res.status(201).json({ token, newUser });
    next();
  } catch (err) {
    console.log(err)
    res.status(401).send(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(401).send("please provide an username and password ");
    }
    const user = await User.findOne({ username: username }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).send("No autorized user ");
    }
    console.log(user);
    const token = signToken(user._id);
    return res.status(201).json(token,user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401).send("You are not logged in ");
  }

  try {
    const decoded = await util.promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );

    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return res
        .status(401)
        .send("The user belonging to the token is no longer valid .");
    }

    if (currentUser.changedPasswordAfter(decoded.iat)) {
      res.status(401).send("password changed ");
    }

    req.user = currentUser;
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid Credentials!" });
  }

  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send("Unauthorized access . ");
    }
    next();
  };
};

exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((tokenObj) => {
      return tokenObj.token != req.token;
    });
    await req.user.save();
    return res.status(200).json({ message: "logged out succesfully" });
  } catch (error) {
    return error;
  }
};
