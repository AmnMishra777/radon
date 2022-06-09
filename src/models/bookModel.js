const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author: {
        type: ObjectId,
        ref: "Author"
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "publisherData"
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
