const express = require("express");
const { sequelize } = require("./config");
const bodyParser = require("body-parser");
const { tablaproveedor } = require("./model/ProveedorModel");
const { tablalibros } = require("./model/LibrosModel");
const { tablaadministrador } = require("./model/AdministradorModel");
const { routerLogin } = require("./views/loginviews");
const { routerBookById } = require("./views/books/GetBookByIdViews");
const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("CONEXION A LA BASE DE DATOS EXITOSA!");
  })
  .catch((error) => {
    console.error("EL ERROR DE CONEXION ES: " + error);
  });

sequelize.sync();

app.use(
  "/api",
  routerLogin,
  routerBookById,
  tablaproveedor,
  tablalibros,
  tablaadministrador
);

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`);
