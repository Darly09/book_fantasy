const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./config");

// routes
const HomeRoutes = require("./views/HomeViews");
const { LoginRoutes } = require("./views/LoginViews");
const { BooksRouter } = require("./views/books");
const {HomeGeneroViews} = require('./Views/HomeGeneroViews');

const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API
app.use("/api", HomeRoutes, LoginRoutes, BooksRouter);

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
