const userAuth = (req, res, next) => {
  console.log("Admin auth is checking");
  const token = "abc";
  const userToken = token === "abc";
  if (!userToken) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};

const adminAuth = (req, res, next) => {
  console.log("Admin auth is checking");
  const token = "abc";
  const authToken = token === "abc";
  if (authToken) {
    next();
  } else {
    res.status(401).send("unauthorizerd");
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
