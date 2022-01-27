const quizRouter = require("express").Router()
const QuizController = require("../controllers/QuizController")
const authentication = require("../middlewares/authentication")
const errorHandler = require("../middlewares/errorHandler")

quizRouter.get("/quizes", authentication, QuizController.get5Quizes)
quizRouter.get("/APOD", QuizController.APOD)

quizRouter.use(errorHandler)

module.exports = quizRouter