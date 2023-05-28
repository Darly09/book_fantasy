const {booksTable} = require("../../model/BooksModel");

async function getBooks (){
    const books = await booksTable.findAll()
    return books 
}

module.exports =getBooks
