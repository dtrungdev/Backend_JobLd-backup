"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Feedback", {
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
            feedback: {
                type: Sequelize.TEXT,
            },
            star: {
                type: Sequelize.INTEGER,
            },
            time: { type: Sequelize.DATE },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Feedback");
    },
};
