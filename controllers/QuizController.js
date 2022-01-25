const { Quizes } = require("../models/index.js")
let Sequelize = require('sequelize')

class QuizController {

  // Get 5 Quizes
  static async get5Quizes(req, res, next) {
    try {
      const { difficulty } = req.body

      const quizes = await Quizes.findAll({
        order: Sequelize.literal('random()'),
        limit: 5,
        where: {
          difficulty
        }
      })

      res.status(200).json(quizes)
    } catch (err) {
      next(err)
    }
  }

}

module.exports = QuizController