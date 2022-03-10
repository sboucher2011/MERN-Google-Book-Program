const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    authors: {
        type: [String]
    },
    link: {
        type: String
    },
    image: {
        type: String
    },
    bookId: {
        type: String
    }

})

module.exports = new mongoose.model('Book', bookSchema)