"use strict";
const { Model } = require("sequelize");
//const specialty = require("./specialty");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Appointment, { foreignKey: "userId" });
      this.hasMany(models.Appointment, { foreignKey: "doctorId" });
      this.hasMany(models.DoctorAvailability, { foreignKey: "doctorId" });
      this.hasMany(models.DoctorUnavailability, { foreignKey: "doctorId" });
      this.hasMany(models.Payment, { foreignKey: "userId" });
      this.hasMany(models.Notification, { foreignKey: "userId" });
      this.belongsTo(models.Specialty, { foreignKey: "specialtyId"});
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("User", "Doctor"),
        allowNull: false,
      },
      specialty: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      licenseNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      clinicAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      specialtyId:{
        type:DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
