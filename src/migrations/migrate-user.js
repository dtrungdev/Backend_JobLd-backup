"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("User", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            username: {
                type: Sequelize.STRING,
            },
            fullname: {
                type: Sequelize.STRING,
            },

            birthday: {
                type: Sequelize.DATE,
            },
            sex: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            avatar: {
                type: Sequelize.BLOB,
            },
            cv: {
                type: Sequelize.BLOB,
            },
            addressId: {
                type: Sequelize.INTEGER,
            },

            companyId: {
                type: Sequelize.INTEGER,
            },
            groupId: {
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("User");
    },
};
