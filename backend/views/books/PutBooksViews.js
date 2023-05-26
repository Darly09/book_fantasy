const express = require("express");
const { putBook } = require("../../controller/books/PutBooksController");
const routerPutBook = express.Router();

routerPutBook.put("/books/:id", async (req, res) => {
  const update = await putBook(req);
  res.status(update.code);
  res.send(update);
});

module.exports = { routerPutBook };
