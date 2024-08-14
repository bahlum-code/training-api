// controllers/doctorUnavailabilityController.js
const { DoctorUnavailability } = require("../models");

class DoctorUnavailabilityController {
  create = async (req, res, next) => {
    try {
      const unavailability = await DoctorUnavailability.create(req.body);
      return res.status(201).json(unavailability);
    } catch (error) {
      next(error);
    }
  };

  fetch = async (req, res, next) => {
    try {
      const unavailability = await DoctorUnavailability.findByPk(req.params.id);
      if (!unavailability)
        return res.status(404).json({ message: "Unavailability not found" });
      return res.status(200).json(unavailability);
    } catch (error) {
      next(error);
    }
  };

  fetchAll = async (req, res, next) => {
    try {
      const unavailabilities = await DoctorUnavailability.findAll();
      return res.status(200).json(unavailabilities);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const unavailability = await DoctorUnavailability.findByPk(req.params.id);
      if (!unavailability)
        return res.status(404).json({ message: "Unavailability not found" });
      await unavailability.destroy();
      return res
        .status(200)
        .json({ message: "Unavailability deleted successfully" });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const unavailability = await DoctorUnavailability.findByPk(req.params.id);
      if (!unavailability)
        return res.status(404).json({ message: "Unavailability not found" });
      await unavailability.update(req.body);
      return res.status(200).json(unavailability);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new DoctorUnavailabilityController();
