const axios = require("axios")
const { Collection } = require("../models")

class CollectionController {

  // Buy a character
  static async postCollection(req, res, next) {
    try {
      const collection = await Collection.create({
        fetchIdAPI: +req.params.characterId,
        UserId: +req.currentUser.id
      })

      res.status(200).json(collection)
    } catch (err) {
      next(err)
    }
  }

}

module.exports = CollectionController