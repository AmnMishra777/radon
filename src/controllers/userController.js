const UserModel= require("../models/userModel.js")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

let boooks = [{
    "bookName": "Rich Dad Poor Dad",
    "authorName": "Robert.K",
    "category": "Finance",
    "year": 1997
},

{  
    "bookName": "Think and Grow Rich",
    "authorName": "Napolean Hill",
    "category": "Finance",
    "year": 1937
    
},

{ 
    "bookName": "The Intelligent Investor",
    "authorName": "Benjamin Graham",
    "category": "Stocks and Finance",
    "year": 1949
}]


const books= async function (req, res) {
    let data= req.body
//    let savedData=  await UserModel.create(data)
//      let v = Obj[savedData].push(boooks)
//     res.send( {data: v} )
// }


    let ele= req.body
    boooks.push(ele)
    res.send(  { data: boooks , status: true }  )

}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.books= books