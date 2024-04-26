"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Location.belongsTo(models.User);
            Location.belongsTo(models.Company);
        }
    }
    Location.init(
        {
            country: DataTypes.STRING,
            province: DataTypes.STRING,
            district: DataTypes.STRING,
            detail: DataTypes.STRING,
            companyId: DataTypes.INTEGER,
            jobId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Location",
        }
    );
    return Location;
};
