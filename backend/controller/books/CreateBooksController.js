const { booksTable } = require("../../model/BooksModel");

async function postCreateController(req) {
  const { nom_lib, imagen, precio_lib, aut_lib, gen_lib, stock } = req.body;
  console.log(req.body);

  if (!nom_lib || !imagen || !precio_lib || !aut_lib || !gen_lib || stock===undefined || stock===null) {
    return { error: "Falta información requerida" };
  }
  const book = await booksTable.create({
    nom_lib: nom_lib,
    imagen: imagen,
    precio_lib: precio_lib,
    aut_lib: aut_lib,
    gen_lib: gen_lib,
    stock: stock,
  });
  console.log("has creado un nuevo libro");
  console.log(book);

  return book;
}

module.exports = { postCreateController };
