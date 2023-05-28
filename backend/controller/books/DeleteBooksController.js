const { booksTable } = require("../../model/BooksModel");

async function deleteBookController(req) {
  const codigo = req.params.id;
  console.log(codigo);
  const Book = await booksTable.destroy({
    where: {
      codigo: codigo,
    },
  });

  console.log("Se ha eliminado un libro");
  return {
    id: codigo,
    code: 200,
    message: "se elimino correctamente el libro: " + codigo,
  };
}
module.exports = { deleteBookController };
