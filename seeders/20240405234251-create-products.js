'use strict';

/** @type {import('sequelize-cli').Migration} */
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

    await queryInterface.bulkInsert('products', [
      {
        "name": "Product 1",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-00.jpg",
        "imageAlt": "Front of Product 1",
        "price": "27",
        "color": "#cc7581",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 2",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        "imageAlt": "Front of Product 2",
        "price": "51",
        "color": "#9101df",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 3",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
        "imageAlt": "Front of Product 3",
        "price": "58",
        "color": "#d83ab1",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 4",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
        "imageAlt": "Front of Product 4",
        "price": "81",
        "color": "#4b2b2c",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 5",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
        "imageAlt": "Front of Product 5",
        "price": "95",
        "color": "#b8f02f",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 6",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-05.jpg",
        "imageAlt": "Front of Product 6",
        "price": "77",
        "color": "#d6bcae",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 7",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-06.jpg",
        "imageAlt": "Front of Product 7",
        "price": "78",
        "color": "#166a",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 8",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-07.jpg",
        "imageAlt": "Front of Product 8",
        "price": "73",
        "color": "#5bffdf",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 9",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-08.jpg",
        "imageAlt": "Front of Product 9",
        "price": "95",
        "color": "#10e0a2",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 10",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-09.jpg",
        "imageAlt": "Front of Product 10",
        "price": "97",
        "color": "#499efd",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 11",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-010.jpg",
        "imageAlt": "Front of Product 11",
        "price": "44",
        "color": "#d8cb12",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 12",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-011.jpg",
        "imageAlt": "Front of Product 12",
        "price": "60",
        "color": "#bbc9b4",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 13",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-012.jpg",
        "imageAlt": "Front of Product 13",
        "price": "68",
        "color": "#2df6b3",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 14",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-013.jpg",
        "imageAlt": "Front of Product 14",
        "price": "112",
        "color": "#8dec1",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 15",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-014.jpg",
        "imageAlt": "Front of Product 15",
        "price": "33",
        "color": "#4963bf",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 16",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-015.jpg",
        "imageAlt": "Front of Product 16",
        "price": "78",
        "color": "#27700a",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 17",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-016.jpg",
        "imageAlt": "Front of Product 17",
        "price": "103",
        "color": "#7c019d",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 18",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-017.jpg",
        "imageAlt": "Front of Product 18",
        "price": "75",
        "color": "#cc1f07",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 19",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-018.jpg",
        "imageAlt": "Front of Product 19",
        "price": "64",
        "color": "#7c04b8",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Product 20",
        "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-019.jpg",
        "imageAlt": "Front of Product 20",
        "price": "118",
        "color": "#74103d",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
