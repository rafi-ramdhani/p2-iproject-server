const collectionRouter = require("express").Router()
const CollectionController = require("../controllers/CollectionController.js")
const UserController = require("../controllers/UserController.js")
const authentication = require("../middlewares/authentication.js")
const errorHandler = require("../middlewares/errorHandler.js")

// To get all collections from logged in user
collectionRouter.get("/collections", authentication, CollectionController.getCollections)

// Buy a character and add it to collections while decreasing user points
collectionRouter.post("/collections/:characterId", authentication, CollectionController.postCollection)

collectionRouter.use(errorHandler)

module.exports = collectionRouter