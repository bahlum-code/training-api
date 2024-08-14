// controllers/doctorAvailabilityController.js

const doctorAvailabilityService = require("../services/doctorAvailabilities");

class DoctorAvailabilityController {
  // Create a new doctor availability
  create = async (req, res) => {
    try {
      const availability =
        await doctorAvailabilityService.createDoctorAvailability(req.body);
      res.status(201).json(availability);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Fetch a single doctor availability by ID
  fetch = async (req, res) => {
    try {
      const availability =
        await doctorAvailabilityService.getDoctorAvailabilityById(
          req.params.id
        );
      res.status(200).json(availability);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  // Fetch all doctor availabilities
  fetchAll = async (req, res) => {
    try {
      const availabilities =
        await doctorAvailabilityService.getAllDoctorAvailabilities();
      res.status(200).json(availabilities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Update a doctor availability by ID
  update = async (req, res) => {
    try {
      const availability =
        await doctorAvailabilityService.updateDoctorAvailability(
          req.params.id,
          req.body
        );
      res.status(200).json(availability);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete a doctor availability by ID
  delete = async (req, res) => {
    try {
      await doctorAvailabilityService.deleteDoctorAvailability(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = new DoctorAvailabilityController();
