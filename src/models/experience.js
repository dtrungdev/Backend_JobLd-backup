"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Experience extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Experience.hasMany(models.Job);
        }
    }
    Experience.init(
        {
            experience: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Experience",
        }
    );
    return Experience;
};
