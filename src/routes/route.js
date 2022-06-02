const express = require('express');
const externalModule = require('../logger/logger.js')
const externalModule1 = require('../util/helper.js')
const externalModule2 = require('../validator/formatter.js')
const externalModule3 = require('./problem4.js')


const router = express.Router();

router.get('/test-me', function (req, res) {
    
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

router.get('/hello-me', function (req, res) {
    externalModule3.chunkFunction()
    externalModule3.tailFunction()
    externalModule3.unionFunction()
    externalModule3.fromPairsFunction()

    res.send('problem 4')
});



 module.exports = router;
