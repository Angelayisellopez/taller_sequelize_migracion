'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs',[
      {
        titulo:"viaje",
        nombre:"japon",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        titulo:"caminata",
        nombre:"parque",
        createdAt:new Date(),
        updatedAt:new Date(),
      }
    ],{})
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs', null,{})
  }
};
