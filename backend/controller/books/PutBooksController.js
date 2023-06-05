const { booksTable } = require("../../model/BooksModel");

async function updateBook(req) {
  try {
    const bookId = req.params.id;
    const book = req.body;

    await booksTable.update(
      {
        nom_lib: book.nom_lib,
        imagen: book.imagen,
        precio_lib: book.precio_lib,
        aut_lib: book.aut_lib,
        gen_lib: book.gen_lib,
        stock: book.stock,
        id_p1: book.id_p1,
      },
      { where: { codigo: bookId } }
    );
    return { code: 200, message: "Libro actualizado correctamente" };
  } catch (error) {
    console.log(error);
    return { code: 400, message: "Error al actualizar el libro: " + error };
  }
}

module.exports = { updateBook };
