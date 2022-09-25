const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is mandatory"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate:function(el){
      return el===this.password;
    }
  },
  
});

userSchema.pre('save', async function(next){
  if(!this.isModified('password'))return next();

  this.password= await bcrypt.hash(this.password, 12);

  this.passwordConfirm= undefined;

  next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;
