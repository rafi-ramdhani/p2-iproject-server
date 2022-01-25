const indexRouter = require("express").Router()
const userRouter = require("./userRouter")

indexRouter.use(userRouter)

module.exports = indexRouter