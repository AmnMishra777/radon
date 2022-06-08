const { count } = require("console")
const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getBooksbyChetanBhagat= async function (req, res) {
    let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BookModel.find({author_id:data[0].author_id})
  res.send({msg:bookData})
}


// const authorofBook= async function (req, res) {
//   let data=await BookModel.findOneAndUpdate({name:"two states"},{$set:{prices:100}},{new:true});
//   let authorData=await AuthorModel.find({author_id:data.author_id}.select("author_name"))
//   let price= data.prices
     
//      res.send( { msg: authorData,price})
// }


const authorofBook = async function(req,res){

  let books = await BookModel.findOneAndUpdate(  {name: "two states" } , {$set: {price : 100} }, { new: true});
  let authorData= await AuthorModel.find({author_id:books.author_id}).select("author_name")
  let prices = books.price
  res.send({msg: authorData,prices})
}


const booksCost = async function(req,res){
 const bookData = await BookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id:1})
 const id = bookData.map(inp => inp.author_id)

 let temp = []

 for(let i=0;i<id.length;i++){
     let x = id[i]
     const author = await AuthorModel.find({ author_id:x}).select({authorName:1, _id:0})
     temp.push(author)
 }
 const author_name = temp.flat()
 res.send({msg: author_name})
}


module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBooksbyChetanBhagat= getBooksbyChetanBhagat
module.exports.authorofBook= authorofBook
module.exports.booksCost= booksCost