const express  = require('express');
const {getBookById} = require('../../controller/books/GetBookByIdController');
const routerBookById = express.Router();

routerBookById.get("/books/:id", async (req, res) => {
    const id = req.params.id;
    const book = await getBookById(id);
    res.send(book);
});

module.exports = {routerBookById};
