const express = require('express');
const router = express.Router();

const mcontroller = require("../controllers/mcontrollers.js")

router.get("/time", mcontroller.time) 

router.get("/ipAddress", mcontroller.ipAddress)

router.get("/location", mcontroller.location)






module.exports = router;