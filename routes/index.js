const indexRouter = require("express").Router()
const characterRouter = require("./characterRouter")
const userRouter = require("./userRouter")

indexRouter.use(userRouter)
indexRouter.use(characterRouter)

module.exports = indexRouter