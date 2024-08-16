const doctorUnavailabilityService = require("../services/doctorUnavailabilities");

class DoctorUnavailabilityController {
  create = async (req, res) => {
    try {
      const unavailability =
        await doctorUnavailabilityService.createDoctorUnavailability(req.body);
      res.status(201).json(unavailability);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

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

  fetchAll = async (req, res) => {
    try {
      const unavailabilities =
        await doctorUnavailabilityService.getAllDoctorUnavailabilities();
      res.status(200).json(unavailabilities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

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
