'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Collections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fetchIdAPI: {
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users"
          },
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Collections');
  }
};