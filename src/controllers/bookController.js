const AuthorModel = require("../models/authorModel.js")
const bookModel = require("../models/bookModel.js")
const publisherModel = require("../models/publisherModel.js")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const createBookById = async function (req, res) {
    //validate author
    let book = req.body
    let authorId = req.body.author
    let publisherId = req.body.publisher
    if (!authorId) {
    res.send({ Error: "Please enter Author ID" })
    }
    const authorInfo = await AuthorModel.findById(authorId)
    if (!authorInfo) {
    res.send({ Error: "Please enter a valid Author ID" })
    }
    //validate publisher
    if (!publisherId) {
    res.send({ Error: "Please Enter Publisher ID" })
    }
    const publisherInfo = await publisherModel.findById(publisherId)
    if (!publisherInfo) {
    res.send({ Error: "Please enter a valid Publisher ID" })
    }
    let bookCreatedById = await bookModel.create(book)
    res.send({ data: bookCreatedById })
    }

const getBookAuthorPub= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
    }


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBookAuthorPub= getBookAuthorPub
module.exports.createBookById= createBookById

