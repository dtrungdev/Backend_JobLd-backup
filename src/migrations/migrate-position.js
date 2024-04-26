"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Position", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            position: {
                type: Sequelize.STRING,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Position");
    },
};
