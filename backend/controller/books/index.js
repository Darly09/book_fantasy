const { postCreateController } = require("./CreateBooksController");
const { deleteBookController } = require("./DeleteBooksController");
const { getBookById } = require("./GetBookByIdController");
const { updateBook } = require("./PutBooksController");
const getBooks = require("./GetBooksController")

module.exports = {
  postCreateController,
  deleteBookController,
  getBookById,
  updateBook,
  getBooks,
};
