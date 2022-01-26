const { User, Character } = require("../models")
const { createHash, compareHash } = require("../helpers/bcrypt")
const { createToken } = require("../helpers/jwt")
const axios = require("axios")

class UserController {

  // Register
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body

      const register = await User.create({
        username,
        email,
        password,
        profilePicture: "https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png"
      })

      res.status(201).json({
        id: +register.id,
        email: register.email
      })
    } catch (err) {
      next(err)
    }
  }

  // Login
  static async login(req, res, next) {
    try {
      const { username, password } = req.body


      if (!username || !password) {
        throw { name: "InvalidUsernamePassword" }
      }

      const foundUser = await User.findOne({
        where: {
          username
        }
      })

      if (!foundUser || !compareHash(password, foundUser.password)) {
        throw { name: "InvalidUsernamePassword" }
      }

      const token = createToken({ id: +foundUser.id })

      res.status(200).json({
        access_token: token
      })
    } catch (err) {
      next(err)
    }
  }

  // Earn points
  static async earnPoints(req, res, next) {
    try {
      const { earnedPoints } = req.body

      const user = await User.findByPk(+req.currentUser.id)

      const earned = await User.update({
        points: +user.points + +earnedPoints
      }, {
        where: {
          id: +req.currentUser.id
        },
        returning: true
      })

      res.status(200).json({ message: `User with id ${earned[1][0].id} has earned ${earnedPoints} and now has ${earned[1][0].points}` })
    } catch (err) {
      next(err)
    }
  }

  // Get User
  static async getUser(req, res, next) {
    try {
      const user = await User.findByPk(+req.currentUser.id)

      res.status(200).json({
        username: user.username,
        points: user.points,
        profilePicture: user.profilePicture
      })
    } catch (err) {
      next(err)
    }
  }

}

module.exports = UserController