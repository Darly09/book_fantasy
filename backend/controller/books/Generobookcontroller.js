const { booksTable } = require("../../model/BooksModel");

async function getBookGender(gender) {


    const books = await booksTable.findOne({ where: { gen_lib: gender } });
    console.log(books);

    if (books === null) {
        return {
            code: 400,
            message: "No encontramos libros con este genero"
        }
    } else {

        return {
            code: 200,
            massage: "done",
            data: books
        };
    }
}

module.exports = { getBookGender };