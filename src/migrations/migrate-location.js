"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Location", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            country: {
                type: Sequelize.STRING,
            },
            province: {
                type: Sequelize.STRING,
            },
            district: {
                type: Sequelize.STRING,
            },
            detail: {
                type: Sequelize.STRING,
            },
            CompanyId: {
                type: Sequelize.INTEGER,
            },
            JobId: {
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Location");
    },
};
