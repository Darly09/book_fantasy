const { booksTable } = require("../../model/BooksModel");

async function postCreateController(req) {
  const {
    nom_lib,
    imagen,
    prec_li,
    dcrip_lib,
    aut_lib,
    gen_lib,
    stock,
    edic_ltda,
    id_p1,
  } = req.body;
  console.log(req.body);

  if (
    !nom_lib ||
    !imagen ||
    !prec_li ||
    !dcrip_lib ||
    !aut_lib ||
    !gen_lib ||
    !stock ||
    !edic_ltda ||
    !id_p1
  ) {
    return { error: "Falta información requerida" };
  }
  const book = await tablalibros.create({
    nom_lib: nom_lib,
    imagen: imagen,
    prec_li: prec_li,
    dcrip_lib: dcrip_lib,
    aut_lib: aut_lib,
    gen_lib: gen_lib,
    stock: stock,
    edic_ltda9: edic_ltda,
    id_p1: id_p1,
  });
  console.log("has creado un nuevo libro");

  return book;
}

module.exports = { postCreateController };
