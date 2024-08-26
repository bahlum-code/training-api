"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User ,{foreignKey: "specialtyId"});
    }
  }
  Specialty.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      specialtyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specialtyDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      sequelize,
      modelName: "Specialty",
    }
  );
  return Specialty;
};
