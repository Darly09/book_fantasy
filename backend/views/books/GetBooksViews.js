const express = require("express")
const getBooks = require("../../controller/books/GetBooksController")
const router = express.Router()


router.get("/",async (request,response )=>{
     try{
        const books = await getBooks();
        response.send (books)
       } catch (error) {
        response.send ("lo siento no se pueden obtener los libros", error)
    }
})
module.exports = router