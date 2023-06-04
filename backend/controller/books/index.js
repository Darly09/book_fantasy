const { postCreateController } = require("./CreateBooksController");
const { deleteBookController } = require("./DeleteBooksController");
const { getBookById } = require("./GetBookByIdController");
const { updateBook } = require("./PutBooksController");
const getBooks = require("./GetBooksController");
const { getBookGender } = require("./Generobookcontroller");

module.exports = {
  postCreateController,
  deleteBookController,
  getBookById,
  updateBook,
  getBooks,
  getBookGender
};
