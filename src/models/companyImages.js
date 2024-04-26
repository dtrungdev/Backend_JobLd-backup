"use strict";
const { Model, STRING } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Company_Images extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Company_Images.hasOne(models.Company);
        }
    }
    Company_Images.init(
        {
            order: DataTypes.INTEGER,
            type: STRING,
            image: DataTypes.TEXT,
            companyId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Company_Images",
        }
    );

    return Company_Images;
};
