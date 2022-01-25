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
    let data = JSON.parse(fs.readFileSync('./db/answers.json', 'utf-8'))
    let dataInsert = []

    data.forEach(el => {
      dataInsert.push({
        answer: el.answer,
        QuizId: el.QuizId,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    })

    await queryInterface.bulkInsert("Answers", dataInsert)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Answers", null)
  }
};
