const collectionRouter = require("express").Router()
const CollectionController = require("../controllers/CollectionController.js")
const authentication = require("../middlewares/authentication.js")
const errorHandler = require("../middlewares/errorHandler.js")

collectionRouter.post("/collections/:characterId", authentication, CollectionController.postCollection)

collectionRouter.use(errorHandler)

module.exports = collectionRouter