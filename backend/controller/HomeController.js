const dataCarrousel = require("../config/Carrousel");
const { tablalibros } = require("../model/LibrosModel");

async function getHomeController(req) {
  const books = await tablalibros.findAll();
  const best_selling_books = await tablalibros.findAll({ limit: 5 });
  const carrousel = dataCarrousel;

  return {
    carrousel,
    books,
    best_selling_books,
  };
}

module.exports = { getHomeController };
