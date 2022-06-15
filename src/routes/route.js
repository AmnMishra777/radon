const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mware= require("../middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", mware.mw ,userController.getUserData)

router.post("/users/:userId/posts", mware.mw ,userController.postMessage)

router.put("/users/:userId", mware.mw, userController.updateUser)
//router.delete('/users/:userId', userController.deleteUser)

module.exports = router;