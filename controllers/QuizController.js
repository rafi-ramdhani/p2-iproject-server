const { Quizes, Answers } = require("../models/index.js")
let Sequelize = require('sequelize')

class QuizController {

  // Get 5 Quizes
  static async get5Quizes(req, res, next) {
    try {
      const { difficulty } = req.query

      const quizes = await Quizes.findAll({
        order: Sequelize.literal('random()'),
        limit: 5,
        where: {
          difficulty
        }
      })

      const answers = await Answers.findAll()

      let quizesOutput = []

      quizes.forEach(el => {
        let obj = {
          id: el.id,
          question: el.question,
          correctAnswer: el.correctAnswer,
          difficulty: el.difficulty,
          answers: []
        }

        answers.forEach(el2 => {
          if (el2.QuizId === el.id) {
            obj.answers.push(el2.answer)
          }
        })

        quizesOutput.push(obj)
      })

      res.status(200).json(quizesOutput)
    } catch (err) {
      next(err)
    }
  }

}

module.exports = QuizController