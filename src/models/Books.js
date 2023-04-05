const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    id: { type: String, unique: true },
    title: String,
    author: String,
    publshedAt: String
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book