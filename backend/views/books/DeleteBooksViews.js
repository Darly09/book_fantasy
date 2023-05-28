const express = require("express");
const deleteRouter = express.Router();
const {
  deleteBookController,
} = require("../../controller/books/DeleteBooksController");

deleteRouter.delete("/:id", async (req, res) => {
  try {
    const response = await deleteBookController(req);
    return res.json(response);
  } catch (error) {
    console.log("error al borrar" + error);
    return res.status(400).json({ error: "error en su eliminacion" });
  }
});
module.exports = deleteRouter;
