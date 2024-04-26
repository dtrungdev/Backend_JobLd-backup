"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Field", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            career: {
                type: Sequelize.STRING,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Field");
    },
};
