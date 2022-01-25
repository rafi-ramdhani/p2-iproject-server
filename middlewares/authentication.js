const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers

    if (!access_token) {
      throw { name: "JsonWebTokenError" }
    }

    const payload = verifyToken(access_token)
    const user = await User.findByPk(payload.id)

    req.currentUser = {
      id: +user.id,
      email: user.email,
      username: user.username
    }

    if (user) {
      next()
    }
  } catch (error) {
    next(error)
  }
}

module.exports = authentication