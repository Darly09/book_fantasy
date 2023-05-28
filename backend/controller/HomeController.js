const dataCarrousel = require("../config/Carrousel");
const { booksTable } = require("../model/BooksModel");

async function getHomeController(req) {
  const books = await booksTable.findAll();
  const best_selling_books = await booksTable.findAll({ limit: 5 });
  const carrousel = dataCarrousel;

  return {
    carrousel,
    books,
    best_selling_books,
  };
}

module.exports = { getHomeController };
