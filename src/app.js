const express = require("express");
const app = express();

const { adminAuth, userAuth } = require("./middleware/auth");

app.use("/admin", adminAuth);

app.use("/user", userAuth, (req, res) => {
  res.send("User data send");
});
app.use("/user/data", (req, res) => {
  res.send("your data is sent");
});

app.use("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});
app.use("/admin/deleteData", (req, res) => {
  res.send("all data deleted");
});

app.listen(3001, () => {
  console.log("server is running on the port 3001");
});
