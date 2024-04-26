"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Field extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Field.belongsToMany(models.Job, { through: models.Field_Job });
            Field.belongsToMany(models.Company, {
                through: models.Company_Field,
            });
        }
    }
    Field.init(
        {
            career: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Field",
        }
    );
    return Field;
};
