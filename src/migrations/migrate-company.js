"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Company", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            avatar: {
                type: Sequelize.BLOB,
            },
            introduce: {
                type: Sequelize.TEXT,
            },
            link: {
                type: Sequelize.STRING,
            },
            facebook: {
                type: Sequelize.STRING,
            },

            size: {
                type: Sequelize.INTEGER,
            },
            type: {
                type: Sequelize.STRING,
            },
            hotline: {
                type: Sequelize.INTEGER,
            },

            email: {
                type: Sequelize.STRING,
            },
            taxCode: {
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Company");
    },
};
