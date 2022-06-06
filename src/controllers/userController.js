const UserModel= require("../models/userModel.js")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

// let boooks = [{
//     "bookName": "Rich Dad Poor Dad",
//     "authorName": "Robert.K",
//     "category": "Finance",
//     "year": 1997
// },

// {  
//     "bookName": "Think and Grow Rich",
//     "authorName": "Napolean Hill",
//     "category": "Finance",
//     "year": 1937
    
// },

// { 
//     "bookName": "The Intelligent Investor",
//     "authorName": "Benjamin Graham",
//     "category": "Stocks and Finance",
//     "year": 1949
// }]





module.exports.createBook= createBook
module.exports.getBookData= getBookData
