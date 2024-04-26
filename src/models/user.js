"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsTo(models.Company);
            User.belongsToMany(models.Company, { through: models.Follow });
            User.belongsToMany(models.Company, { through: models.Feedback });
            User.belongsToMany(models.Job, { through: models.Applied });
            User.hasMany(models.Location);
        }
    }
    User.init(
        {
            username: DataTypes.STRING,
            fullname: DataTypes.STRING,
            birthday: DataTypes.DATE,
            sex: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar: DataTypes.BLOB,
            cv: DataTypes.BLOB,
            addressId: DataTypes.INTEGER,
            companyId: DataTypes.INTEGER,
            groupId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
