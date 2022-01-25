const userRouter = require("express").Router()
const UserController = require("../controllers/UserController")
const authentication = require("../middlewares/authentication")
const errorHandler = require("../middlewares/errorHandler.js")

userRouter.post("/register", UserController.register)
userRouter.post("/login", UserController.login)

// When users successfully answer a quiz, they earned some points
userRouter.patch("/users-earned", authentication, UserController.earnPoints)

userRouter.use(errorHandler)

module.exports = userRouter