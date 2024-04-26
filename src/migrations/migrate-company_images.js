"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("CompanyImages", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            order: {
                type: Sequelize.INTEGER,
            },
            type: {
                type: Sequelize.STRING,
            },
            image: {
                type: Sequelize.TEXT,
            },
            companyId: {
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("CompanyImages");
    },
};
