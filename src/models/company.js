"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Company.belongsToMany(models.User, { through: models.Follow });
            Company.belongsToMany(models.User, { through: models.Feedback });
            Company.belongsToMany(models.Field, {
                through: models.Company_Field,
            });
            Company.hasMany(models.Location);
            Company.hasMany(models.Company_Images);
            Company.hasMany(models.User);
        }
    }
    Company.init(
        {
            name: DataTypes.STRING,
            avatar: DataTypes.BLOB,
            introduce: DataTypes.TEXT,
            link: DataTypes.STRING,
            facebook: DataTypes.STRING,
            size: DataTypes.INTEGER,
            type: DataTypes.STRING,
            hotline: DataTypes.INTEGER,
            email: DataTypes.STRING,
            taxCode: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Company",
        }
    );
    return Company;
};
