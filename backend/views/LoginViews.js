const express = require("express");
const { validacion } = require("../controller/LoginController");
const routerLogin = express.Router();

routerLogin.post("/login", async (req, res) => {
  const usuario = req.body;
  const respuesta = await validacion(usuario.email, usuario.password);
  res.status(respuesta.code);
  res.send(respuesta);
});

module.exports = { routerLogin };
