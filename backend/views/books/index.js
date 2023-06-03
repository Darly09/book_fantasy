const express = require("express");
const BooksRouter = express.Router();

const {
  handleCreateBook,
  handleBookById,
  handleUpdateBook,
  handleDeleteBook,
} = require("./handles");

BooksRouter.post("/book", handleCreateBook);

BooksRouter.get("/book/:id", handleBookById);

BooksRouter.delete("/book/:id", handleDeleteBook);

BooksRouter.put("/book/:id", handleUpdateBook);

module.exports = { BooksRouter };
