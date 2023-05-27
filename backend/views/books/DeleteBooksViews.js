const express = require('express');
const deleteRouter = express.Router();
const { deleteBookController } = require("../../controller/books/DeleteBooksController");

deleteRouter.delete("/:id", async (req, res) => {
  try {
    const response = await deleteBookController(req)
    return res.json(response);
  } catch (error)  {
    console.log("error al borrar" + error);
    return res.status(400).json({ error: 'error en su eliminacion' });
  }
  

  //const deleteBook= async (id) => {
  //   const response = await fetch(`/libros/${id}`, { method: 'DELETE' });
  //   const data = await response.json();
  //   console.log(data);
  // };
})
module.exports = deleteRouter;