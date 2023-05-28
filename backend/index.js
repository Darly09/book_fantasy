const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./config");

// routes
const HomeRoutes = require("./views/HomeViews");
const { BooksRouter } = require("./views/books");

const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API
app.use("/api", HomeRoutes, BooksRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("CONEXION A LA BASE DE DATOS EXITOSA!");
  })
  .catch((error) => {
    console.error("EL ERROR DE CONEXION ES: " + error);
  });

sequelize.sync();

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`);
