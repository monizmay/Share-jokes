const {
    login,
    register,
    logOut,
    userVerification
  } = require("../controllers/userController");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.get("/logout/:id", logOut);
  router.post("/", userVerification);
  
  module.exports = router;