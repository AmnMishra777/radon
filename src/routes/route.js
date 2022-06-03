const express = require('express');
const router = express.Router();


let players = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]
},

{
    "name": "dharmen",
    "dob": "11/12/1993",
    "gender": "male",
    "city": "patna",
    "sports": [
    "cricket"
    ]
},

{
    "name": "rohit",
    "dob": "7/16/1996",
    "gender": "male",
    "city": "noida",
    "sports": [
    "golf"
    ]
}]
            



router.post("/players", function(req, res) {

    let ele= req.body.name
    let ele1= req.body.dob
    let ele2= req.body.gender
    let ele3= req.body.city
    let ele4= req.body.sports
    players.push(ele,ele1,ele2,ele3,ele4)
    res.send(  { data: players , status: true }  )
})

module.exports = router;