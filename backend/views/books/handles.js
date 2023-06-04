const {
  postCreateController,
  getBookById,
  deleteBookController,
  updateBook,
  getBooks
} = require("../../controller/books");

const handleCreateBook = async (req, res) => {
  try {
    const response = await postCreateController(req);
    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Falta información requerida" });
  }
};

const handleBookById = async (req, res) => {
  const id = req.params.id;
  const book = await getBookById(id);
  res.send(book);
};

const handleDeleteBook = async (req, res) => {
  try {
    const response = await deleteBookController(req);
    return res.json(response);
  } catch (error) {
    console.log("error al borrar" + error);
    return res.status(400).json({ error: "error en su eliminacion" });
  }
};

const handleUpdateBook = async (req, res) => {
  const update = await updateBook(req);
  res.status(update.code);
  res.send(update);
}; 

const handleBooks = async (req,res)=>{
  res.send (await getBooks())
};

module.exports = {
  handleCreateBook,
  handleBookById,
  handleUpdateBook,
  handleDeleteBook,
  handleBooks
};
