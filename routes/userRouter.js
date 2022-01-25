const userRouter = require("express").Router()
const UserController = require("../controllers/UserController")
const errorHandler = require("../middlewares/errorHandler.js")

userRouter.post("/register", UserController.register)
userRouter.post("/login", UserController.login)

userRouter.use(errorHandler)

module.exports = userRouter