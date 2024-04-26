"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Job extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Job.belongsTo(models.Category);
            Job.belongsTo(models.Experience);
            Job.belongsToMany(models.User, { through: models.Applied });
            Job.belongsToMany(models.Field, { through: models.Field_Job });
            Job.belongsTo(models.Position);
        }
    }
    Job.init(
        {
            priority: DataTypes.BOOLEAN,
            title: DataTypes.STRING,
            salary: DataTypes.INTEGER,
            currency: DataTypes.STRING,
            employQuantity: DataTypes.INTEGER,
            applyReason: DataTypes.TEXT,
            mainContent: DataTypes.TEXT,
            benefit: DataTypes.TEXT,
            startDate: DataTypes.DATE,
            updateDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            views: DataTypes.INTEGER,
            experienceId: DataTypes.INTEGER,
            categoryId: DataTypes.INTEGER,
            positionId: DataTypes.INTEGER,
            recruiterId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Job",
        }
    );
    return Job;
};
