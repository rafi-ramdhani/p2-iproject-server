const indexRouter = require("express").Router()
const characterRouter = require("./characterRouter")
const collectionRouter = require("./collectionRouter")
const quizRouter = require("./quizRouter")
const userRouter = require("./userRouter")

indexRouter.use(userRouter)
indexRouter.use(characterRouter)
indexRouter.use(collectionRouter)
indexRouter.use(quizRouter)

module.exports = indexRouter