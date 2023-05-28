const express = require("express");
const { sequelize } = require("./config");
const bodyParser = require("body-parser");
const { supplierTable } = require("./model/SupplierModel");
const { booksTable } = require("./model/BooksModel");
const { administratorTable } = require("./model/AdministratorModel");
const { routerLogin } = require("./views/LoginViews");
const { routerBookById } = require("./views/books/GetBookByIdViews");
const { routerPutBook } = require("./views/books/PutBooksViews");
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
  routerPutBook,
  supplierTable,
  booksTable,
  administratorTable
);

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`);
