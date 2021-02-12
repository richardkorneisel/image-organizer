"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pokemons",
      [
        {
          name: "Jaguar",
          img: "https://i.imgur.com/DsJ8KhG.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baby Hippo",
          img: "https://i.imgur.com/rtdRRrW.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
  },
};
// {
//   date: 20120505,
//   title: "Kenya, Safari",
//   comment: "Jaguar, Ol Pejeta Conservancy",
//   img: "https://i.imgur.com/DsJ8KhG.jpg",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// },
// {
//   date: 20120506,
//   title: "Kenya, Safari",
//   comment: "Baby Hippo, Maasai Mara",
//   img: "https://i.imgur.com/rtdRRrW.jpg",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// }