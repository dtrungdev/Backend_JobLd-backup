"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Company_Field extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Company_Field.init(
        {
            companyId: DataTypes.INTEGER,
            fieldId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Company_Field",
        }
    );
    return Company_Field;
};
