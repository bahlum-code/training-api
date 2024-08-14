// controllers/appointmentController.js
const { Appointment } = require("../models");

class AppointmentController {
  create = async (req, res, next) => {
    try {
      const appointment = await Appointment.create(req.body);
      return res.status(201).json(appointment);
    } catch (error) {
      next(error);
    }
  };

  fetch = async (req, res, next) => {
    try {
      const appointment = await Appointment.findByPk(req.params.id);
      if (!appointment)
        return res.status(404).json({ message: "Appointment not found" });
      return res.status(200).json(appointment);
    } catch (error) {
      next(error);
    }
  };

  fetchAll = async (req, res, next) => {
    try {
      const appointments = await Appointment.findAll();
      return res.status(200).json(appointments);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const appointment = await Appointment.findByPk(req.params.id);
      if (!appointment)
        return res.status(404).json({ message: "Appointment not found" });
      await appointment.destroy();
      return res
        .status(200)
        .json({ message: "Appointment deleted successfully" });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const appointment = await Appointment.findByPk(req.params.id);
      if (!appointment)
        return res.status(404).json({ message: "Appointment not found" });
      await appointment.update(req.body);
      return res.status(200).json(appointment);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AppointmentController();
