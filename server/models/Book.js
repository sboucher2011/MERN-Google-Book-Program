const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    authors: String, //needs to be an array
    bookId: String,
    image: String,
    link: String
})

module.exports = new mongoose.model('Book', bookSchema)