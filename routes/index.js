const indexRouter = require("express").Router()
const characterRouter = require("./characterRouter")
const collectionRouter = require("./collectionRouter")
const userRouter = require("./userRouter")

indexRouter.use(userRouter)
indexRouter.use(characterRouter)
indexRouter.use(collectionRouter)

module.exports = indexRouter