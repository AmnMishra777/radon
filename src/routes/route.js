const express = require('express');
const externalModule = require('../logger/logger.js')
const externalModule1 = require('../util/helper.js')
const externalModule2 = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('The constant in logger route has a value '+externalModule.endpoint)
    //console.log('The current batch is '+externalModule.batch)
    //console.log('welcome' +externalModule.welcome)
    externalModule.problem1()
    externalModule.welcome()
    
    externalModule1.empty()
    externalModule1.problem2()
    externalModule1.printDate()
    externalModule1.printMonth()
    externalModule1.getBatchInfo()

    externalModule2.empty()
    externalModule2.problem3()
    externalModule2.trim()
    externalModule2.lowercase()
    externalModule2.uppercase()
    externalModule2.empty()

    

    res.send('My first ever api!')
});



module.exports = router;
