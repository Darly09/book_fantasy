const express = require("express");
const { validation } = require("../controller/LoginController");
const routerLogin = express.Router();

routerLogin.post("/login", async (req, res) => {
  const user = req.body;
  const response = await validation(user.email, user.password);
  res.status(response.code);
  res.send(response);
});

module.exports = { routerLogin };
