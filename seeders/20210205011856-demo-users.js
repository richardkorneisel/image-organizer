"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Tony Stark",
          username: "ironman",
          password: "prettyawesome",
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 1,
        },
        {
          name: "Clark Kent",
          username: "superman",
          password: "canfly",
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 2
        },
        {
          name: "Bruce Wayne",
          username: "batman",
          password: "hasgadgets",
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};