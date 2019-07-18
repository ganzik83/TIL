const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

let userSchema = new Schema({
  // username: String,
  email: String,
  // name: String,
  password: String,
  salt: String
  /*
       signin_date: {
           type: Date,
           default: Date.now
       } */
});

// encrypt password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// confimn validPassword
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// user 모델을 생성하고 앱에 공개(expose)
module.exports = mongoose.model("User", userSchema);
