// controllers/appointmentController.js

const appointmentService = require("../services/appointments");

class AppointmentController {
  // Create a new appointment
  create = async (req, res) => {
    try {
      const appointment = await appointmentService.createAppointment(req.body);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Fetch a single appointment by ID
  fetch = async (req, res) => {
    try {
      const appointment = await appointmentService.getAppointmentById(
        req.params.id
      );
      res.status(200).json(appointment);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  // Fetch all appointments
  fetchAll = async (req, res) => {
    try {
      const appointments = await appointmentService.getAllAppointments();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Update an appointment by ID
  update = async (req, res) => {
    try {
      const appointment = await appointmentService.updateAppointment(
        req.params.id,
        req.body
      );
      res.status(200).json(appointment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete an appointment by ID
  delete = async (req, res) => {
    try {
      await appointmentService.deleteAppointment(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = new AppointmentController();
