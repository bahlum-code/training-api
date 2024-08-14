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
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Appointment, { foreignKey: "appointmentId" });
    }
  }
  Payment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
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
