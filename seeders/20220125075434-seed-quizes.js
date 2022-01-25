'use strict';

const fs = require("fs")

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = JSON.parse(fs.readFileSync('./db/quizes.json', 'utf-8'))
    let dataInsert = []

    data.forEach(el => {
      dataInsert.push({
        question: el.question,
        correctAnswer: el.correctAnswer,
        difficulty: el.difficulty,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    })

    await queryInterface.bulkInsert("Quizes", dataInsert)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Quizes", null)
  }
};
