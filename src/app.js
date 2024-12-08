const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res,next) => {
    console.log("hello");
    // res.send("User");
    next();
  },
  (req, res, next) => {
    console.log("2nd user");
    next();
  },
  (req, res, next) => {
    console.log("3rd user");
    
    next();
  }
);

// app.get("/user", (req, res) => {
//   res.send({ name: "pandain", age: "23" });
// });

// app.post("/user", (req, res) => {
//   res.send("data has been successfully posted");
// });
// app.delete('/user', (req,res)=> {
//   res.send('Data successfully deleted')
// })

// app.patch('/user', (req,res)=> {
//   res.send('Data part has been modified')
// })

// app.put('/user', (req,res)=> {
//   res.send("data has been updated")
// })

app.listen(3001, () => {
  console.log("server is running in port 3001");
});
