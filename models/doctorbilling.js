"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorBilling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  DoctorBilling.init(
    {
      doctorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalAmount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "DoctorBilling",
    }
  );
  return DoctorBilling;
};
