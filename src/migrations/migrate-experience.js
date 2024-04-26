"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Experience", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            experience: {
                type: Sequelize.STRING,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Experience");
    },
};
