
const { tablalibros } = require("../../model/LibrosModel");

async function deleteBookController(req) {
  const codigo = req.params.id;
  console.log(codigo);
  const Book = await tablalibros.destroy({
    where: {
      codigo: codigo
    }
  });

  console.log('Se ha eliminado un libro');
  return  {
    id: codigo,
    code: 200, 
    message: "se elimino correctamente el libro: " + codigo
  };
}
module.exports = { deleteBookController };