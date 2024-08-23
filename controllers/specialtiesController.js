const specialtiesService = require("../services/specialties");

class specialtiesController {
  create = async (req, res) => {
    try {
      const appointment = await appointmentService.createAppointment(req.body);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

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

  fetchAll = async (req, res) => {
    try {
      const specialties = await specialtiesService.getAllSpecialties();
      res.status(200).json(specialties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

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

  delete = async (req, res) => {
    try {
      await appointmentService.deleteAppointment(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = new specialtiesController();
