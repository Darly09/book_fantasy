const express = require("express")
const getBooks = require("../../controller/books/GetBooksController")
const router = express.Router()

router.get("/",async (request,response )=>{
    response.send (await getBooks())
})
module.exports = router