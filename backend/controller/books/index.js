const { postCreateController } = require("./CreateBooksController");
const { deleteBookController } = require("./DeleteBooksController");
const { getBookById } = require("./GetBookByIdController");
const { updateBook } = require("./PutBooksController");

module.exports = {
  postCreateController,
  deleteBookController,
  getBookById,
  updateBook,
};
