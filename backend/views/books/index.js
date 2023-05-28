const express = require("express");
const BooksRouter = express.Router();


const {
  deleteBookController,
  getBookById,
  postCreateController,
  updateBook,
  getBooks,
} = require("../../controller/books");

BooksRouter.post("/book", async (req, res) => {
  try {
    const response = await postCreateController(req);
    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Falta información requerida" });
  }
});

BooksRouter.get("/book", async (request, response) => {
  try {
    const books = await getBooks();
    response.send(books)
  } catch (error) {
    response.send("lo siento no se pueden obtener los libros", error)
  }
})

BooksRouter.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const book = await getBookById(id);
  res.send(book);
});

BooksRouter.delete("/book/:id", async (req, res) => {
  try {
    const response = await deleteBookController(req);
    return res.json(response);
  } catch (error) {
    console.log("error al borrar" + error);
    return res.status(400).json({ error: "error en su eliminacion" });
  }
});

BooksRouter.put("/book/:id", async (req, res) => {
  const update = await updateBook(req);
  res.status(update.code);
  res.send(update);
});



module.exports = { BooksRouter };
