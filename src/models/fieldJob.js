"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Field_Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Field_Job.init(
    {
      fieldId: DataTypes.INTEGER,
      jobId: DataTypes.INTEGER,
     
    },
    {
      sequelize,
      modelName: "Field_Job",
    }
  );
  return Field_Job;
};
