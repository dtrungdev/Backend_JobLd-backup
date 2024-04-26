"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Field_Job", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fieldId: {
                type: Sequelize.INTEGER,
            },
            jobId: {
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Field_Job");
    },
};
