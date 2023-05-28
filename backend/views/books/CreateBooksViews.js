const express = require("express");
const createRouter = express.Router();
const {
  postCreateController,
} = require("../../controller/books/CreateBooksController");

createRouter.post("/", async (req, res) => {
  try {
    const response = await postCreateController(req);
    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Falta información requerida" });
  }
});

module.exports = createRouter;
