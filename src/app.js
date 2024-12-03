const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("server is running on the port 3000");
});
app.use("/", (req, res) => {
  res.send("main page");
});

app.listen(3000, () => {
  console.log("app is listnening");
});
