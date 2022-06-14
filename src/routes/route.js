const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController.js")
const mware= require("../middleware/mw.js")



router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", mware.mw,userController.getUserData)

router.put("/users/:userId", mware.mw,userController.updateUser)

router.delete("/users/:userId", mware.mw, userController.deleteUser)

module.exports = router;