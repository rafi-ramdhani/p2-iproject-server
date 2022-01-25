const characterRouter = require("express").Router()
const CharacterController = require("../controllers/CharacterController.js")
const authentication = require("../middlewares/authentication.js")
const errorHandler = require("../middlewares/errorHandler.js")

characterRouter.get("/characters", authentication, CharacterController.getCharacters)

characterRouter.use(errorHandler)

module.exports = characterRouter