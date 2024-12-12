const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());
app.post("/signup", async (req, res) => {
  //Creating instance of the user
  const user = new User(req.body);

  try {
    await user.save();

    res.send("user added successfully");
  } catch (err) {
    console.log("data is not saved in dataase");
  }
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
