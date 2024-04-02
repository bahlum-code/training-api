'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          name: "Hot Dog",
          ingredients: JSON.stringify({
            hotdog: {
              name: "Hotdog",
              quantity: 1
            },
            bun: {
              name: "Bun",
              quantity: 1
            },
            mustard: {
              name: "Mustard",
              quantity: "to taste"
            },
            ketchup: {
              name: "Ketchup",
              quantity: "to taste"
            },
            onions: {
              name: "Onions",
              quantity: "to taste"
            }
          }),
          image:'https://images-gmi-pmc.edge-generalmills.com/f5a517df-12c8-4d55-aa70-c882d99122e0.jpg',
          source: 'https://www.youtube.com/watch?v=bpwovJ-L9x4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Perro caliente",
          ingredients: JSON.stringify({
            hamburger: {
              name: "Hamburger",
              quantity: 1
            },
            bun: {
              name: "Bun",
              quantity: 1
            },
            mustard: {
              name: "Mustard",
              quantity: "to taste"
            },
            ketchup: {
              name: "Ketchup",
              quantity: "to taste"
            },
            onions: {
              name: "Onions",
              quantity: "to taste"
            },
            lettuce: {
              name: "Lettuce",
              quantity: 1
            },
          }),
          image:'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg',
          source: 'https://www.youtube.com/watch?v=e94Q77otyVM',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
