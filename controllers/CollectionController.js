const axios = require("axios")
const { Collection, Character } = require("../models")

class CollectionController {

  // Buy a character
  static async postCollection(req, res, next) {
    try {
      const collection = await Collection.create({
        fetchIdAPI: +req.params.characterId,
        UserId: +req.currentUser.id
      })

      const characterPrice = await Character.findOne({
        where: {
          fetchIdAPI: +req.params.characterId
        }
      })

      req.collection = {
        price: characterPrice.price,
      }
      next()
    } catch (err) {
      next(err)
    }
  }

  // Get all collections
  static async getCollections(req, res, next) {
    try {
      let collectionsOutput = []

      const collections = await Collection.findAll({
        where: {
          UserId: +req.currentUser.id
        }
      })

      const collectionsWithCharacters = await axios.get("https://thronesapi.com/api/v2/Characters")

      collections.forEach((el1, i) => {
        collectionsWithCharacters.data.forEach((el2) => {
          if (el1.fetchIdAPI === el2.id) {
            collectionsOutput.push({
              id: el1.id,
              fetchIdAPI: el1.fetchIdAPI,
              UserId: el1.UserId,
              character: {
                id: 0,
                firstName: el2.firstName,
                lastName: el2.lastName,
                fullName: el2.fullName,
                title: el2.title,
                family: el2.family,
                image: el2.image,
                imageUrl: el2.imageUrl
              }
            })
          }
        })
      })

      res.status(200).json(collectionsOutput)
    } catch (err) {
      next(err)
    }
  }

}

module.exports = CollectionController