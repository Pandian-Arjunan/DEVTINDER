const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //Creating instance of the user
  const user = new User({
    firstName: "sabarish",
    lastName: "Arjunan",
    emailId: "sabarish@arjunan.com",
    password: "sabarish@123",
  });

  await user.save();

  res.send("user added successfully");
});

connectDB()
  .then(() => {
    console.log("DB is connected");
    app.listen(3001, () => {
      console.log("server is sunning sucessfully");
    });
  })
  .catch((err) => {
    console.error(" ");
  });
