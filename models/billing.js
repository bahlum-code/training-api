'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Billing.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idSchedule: DataTypes.INTEGER,
    billNumber: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    idUser: DataTypes.INTEGER,
    date: DataTypes.DATE,
    payMethod: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Billing',
  });
  return Billing;
};