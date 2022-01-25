const { Character } = require("../models")
const axios = require("axios")

class CharacterController {

  // Get all Characters
  static async getCharacters(req, res, next) {
    try {
      const characters = await axios.get("https://thronesapi.com/api/v2/Characters")

      const characterPrices = await Character.findAll()

      characters.data.forEach((el, i) => {
        el.price = characterPrices[i].price
      })

      res.status(200).json(characters.data)
    } catch (err) {
      next(err)
    }
  }

}

module.exports = CharacterController