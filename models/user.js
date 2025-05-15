"use strict";
const { Model, Op } = require("sequelize");
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
      this.hasOne(models.DoctorBilling, {
        foreignKey: "doctorId",
        as: "billing",
      });
      this.hasMany(models.DoctorAvailability, { foreignKey: "doctorId" });
      this.hasMany(models.DoctorUnavailability, { foreignKey: "doctorId" });
      this.hasMany(models.Payment, { foreignKey: "userId" });
      this.hasMany(models.Notification, { foreignKey: "userId" });
      this.belongsTo(models.Specialty, { foreignKey: "specialtyId" });
    }
    /**
     * Busca médicos según un criterio flexible.
     */
    static async findDoctorsByFlexibleCriteria(searchValue) {
      console.log("searchValue:", searchValue);
      try {
        const doctors = await this.findAll({
          attributes: [
            "id",
            "firstName",
            "lastName",
            "specialty",
            "clinicAddress",
            "phoneNumber",
          ],
          where: {
            role: "Doctor",
            [Op.or]: [
              { firstName: { [Op.like]: `%${searchValue}%` } },
              { lastName: { [Op.like]: `%${searchValue}%` } },
              {
                "$Specialty.specialtyName$": { [Op.like]: `%${searchValue}%` },
              },
              { specialty: { [Op.like]: `%${searchValue}%` } },
            ],
          },
          include: [
            {
              model: sequelize.models.Specialty,
              attributes: ["specialtyName"],
            },
            {
              model: sequelize.models.DoctorAvailability,
              attributes: ["dayOfWeek", "startTime", "endTime"],
            },
            {
              model: sequelize.models.DoctorBilling,
              attributes: ["totalAmount"],
              as: "billing",
            },
          ],
        });

        return doctors;
      } catch (error) {
        console.error("Error al buscar médicos:", error);
        throw new Error("Error al buscar médicos");
      }
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
      specialtyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
