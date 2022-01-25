const characterRouter = require("express").Router()
const CharacterController = require("../controllers/CharacterController.js")
const authentication = require("../middlewares/authentication.js")
const errorHandler = require("../middlewares/errorHandler.js")

// To get all characters from API
characterRouter.get("/characters", authentication, CharacterController.getCharacters)

// To get a character from API
characterRouter.get("/characters/:characterId", authentication, CharacterController.getCharacter)

characterRouter.use(errorHandler)

module.exports = characterRouter