const { tablalibros } = require("../../model/LibrosModel");

async function getBookById(id) {
  if (id == undefined || id == "" || id == null) {
    return {
      code: 400,
      message: "La peticion es incorrecta",
    };
  }

  const book = await tablalibros.findAll({
    where: {
      codigo: id,
    },
  });

  if (book.length == 0) {
    return {
      code: 200,
      message: "no se encontro el LIBRO",
    };
  }

  return book;
}

module.exports = { getBookById };
