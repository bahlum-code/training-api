// controllers/doctorUnavailabilityController.js

const doctorUnavailabilityService = require("../services/doctorUnavailabilities");

class DoctorUnavailabilityController {
  // Create a new doctor unavailability
  create = async (req, res) => {
    try {
      const unavailability =
        await doctorUnavailabilityService.createDoctorUnavailability(req.body);
      res.status(201).json(unavailability);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Fetch a single doctor unavailability by ID
  fetch = async (req, res) => {
    try {
      const unavailability =
        await doctorUnavailabilityService.getDoctorUnavailabilityById(
          req.params.id
        );
      res.status(200).json(unavailability);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  // Fetch all doctor unavailabilities
  fetchAll = async (req, res) => {
    try {
      const unavailabilities =
        await doctorUnavailabilityService.getAllDoctorUnavailabilities();
      res.status(200).json(unavailabilities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Update a doctor unavailability by ID
  update = async (req, res) => {
    try {
      const unavailability =
        await doctorUnavailabilityService.updateDoctorUnavailability(
          req.params.id,
          req.body
        );
      res.status(200).json(unavailability);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete a doctor unavailability by ID
  delete = async (req, res) => {
    try {
      await doctorUnavailabilityService.deleteDoctorUnavailability(
        req.params.id
      );
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = new DoctorUnavailabilityController();
