const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// let books = [{
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


router.post("/bookss", UserController.books) 

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;