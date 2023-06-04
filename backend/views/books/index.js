const express = require("express");
const BooksRouter = express.Router();


const {
  handleCreateBook,
  handleBookById,
  handleUpdateBook,
  handleDeleteBook,
  handleBooks,
  handleBooksGender
} = require("./handles");

BooksRouter.post("/book", handleCreateBook);

BooksRouter.get("/book/:id", handleBookById);

BooksRouter.delete("/book/:id", handleDeleteBook);

BooksRouter.put("/book/:id", handleUpdateBook);

BooksRouter.get("/books", handleBooks);

BooksRouter.get("/books/:gender", handleBooksGender);

module.exports = { BooksRouter };
