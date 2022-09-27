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
    res.status(401).send(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).send("please provide an email and password ");
    }
    const user = await User.findOne({ email: email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).send("No autorized user ");
    }
    console.log(user);
    const token = signToken(user._id);
    return res.status(201).json(token);
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
  const decoded = await util.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );
  console.log(decoded);

  // jwt.verify(token, process.env.JWT_SECRET, function(err, decoded){
  //   if(err){
  //     return res.status(400).send("error");
  //   }
  //   console.log(decoded);
  //   res.status(201).send("fulfilled");
  // })

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
  // console.log(token)
  next();
};
