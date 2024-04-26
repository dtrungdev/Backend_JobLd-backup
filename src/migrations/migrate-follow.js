"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Follow", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
            },
            companyId: {
                type: Sequelize.INTEGER,
            },
            notify: {
                type: Sequelize.TEXT,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Follow");
    },
};
