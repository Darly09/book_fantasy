const express = require("express");
const { validation } = require("../controller/LoginController");
const LoginRoutes = express.Router();

LoginRoutes.post("/login", async (req, res) => {
  const user = req.body;
  const response = await validation(
    user.email,
    user.password,
    user.nombreAdmin
  );
  res.status(response.code);
  res.send(response);
});

module.exports = { LoginRoutes };
