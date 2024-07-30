'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    subject: DataTypes.STRING,
    description: DataTypes.TEXT,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    idPatient: DataTypes.INTEGER,
    idDoctor: DataTypes.INTEGER,
    consultingRoom: DataTypes.STRING,
    speciality: DataTypes.STRING,
    status: DataTypes.INTEGER,
    log: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};