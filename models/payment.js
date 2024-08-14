"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      id: DataTypes.INTEGER,
      paymentMethod: DataTypes.STRING,
      paymentDate: DataTypes.DATE,
      appointmentId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
