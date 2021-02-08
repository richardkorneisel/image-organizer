'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Teams",
      [
        {
          name: "team1",
        },
        {
          name: "team2",
        },
        {
          name: "team3",
        },
      ],
      {}
    );
  },  
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
