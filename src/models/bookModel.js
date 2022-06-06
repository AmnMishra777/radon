const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    year: Number,
    totalPages: Number,
    
    prices: {
        indianPrice: Number,
        europePrice: Number,
    },
    stockAvailable: Boolean
}, { timestamps: true }
);


module.exports = mongoose.model('Booksss', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
