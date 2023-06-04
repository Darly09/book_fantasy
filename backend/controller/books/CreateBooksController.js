const { booksTable } = require("../../model/BooksModel");

async function postCreateController(req) {
  const {
    nom_lib,
    imagen,
    precio_lib,
    dcrip_lib,
    aut_lib,
    gen_lib,
    stock,
    edic_ltda,
  } = req.body;
  console.log(req.body);

  if (
    !nom_lib ||
    !imagen ||
    !precio_lib ||
    !dcrip_lib ||
    !aut_lib ||
    !gen_lib ||
    !stock ||
    !edic_ltda
  ) {
    return { error: "Falta información requerida" };
  }
  const book = await booksTable.create({
    nom_lib: nom_lib,
    imagen: imagen,
    precio_lib: precio_lib,
    dcrip_lib: dcrip_lib,
    aut_lib: aut_lib,
    gen_lib: gen_lib,
    stock: stock,
    edic_ltda: edic_ltda,
  });
  console.log("has creado un nuevo libro");

  return book;
}

module.exports = { postCreateController };
