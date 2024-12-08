const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pandianarjunan2307:OVZngpRuXJvt3ERd@pandian.t0ol6.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
