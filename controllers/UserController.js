const { User } = require("../models")
const { createHash, compareHash } = require("../helpers/bcrypt")
const { createToken } = require("../helpers/jwt")

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

      const token = createToken({
        id: +foundUser.id
      })

      res.status(200).json({
        access_token: token
      })
    } catch (err) {
      next(err)
    }
  }

}

module.exports = UserController