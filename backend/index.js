const express = require("express");
const { sequelize } = require("./config");
const bodyParser = require("body-parser");
const { tablaproveedor } = require("./model/ProveedorModel");
const { tablalibros } = require("./model/LibrosModel");
const { tablaadministrador } = require("./model/AdministradorModel");
const { routerLogin } = require("./views/loginviews");
const { routerBookById } = require("./views/books/GetBookByIdViews");
const deleteRouter = require("./views/books/DeleteBooksViews");
const HomeRoutes = require("./views/HomeViews");
const CreateRoutes = require("./views/books/CreateBooksViews");

const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/home", HomeRoutes);
app.use("/books/book", CreateRoutes);
app.use(
  "/api",
  routerLogin,
  routerBookById,
  tablaproveedor,
  tablalibros,
  tablaadministrador
);
app.use("/books/book", deleteRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("CONEXION A LA BASE DE DATOS EXITOSA!");
  })
  .catch((error) => {
    console.error("EL ERROR DE CONEXION ES: " + error);
  });

sequelize.sync();

app.listen(PORT, async () => console.log("Estoy escuchando"));
