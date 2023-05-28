const {tablalibros} = require("../../model/LibrosModel");

async function getBooks (){
    const books = await tablalibros.findAll()
    return books 
}

module.exports =getBooks
