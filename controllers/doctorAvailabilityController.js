// controllers/doctorAvailabilityController.js
const { DoctorAvailability } = require("../models");

class DoctorAvailabilityController {
  create = async (req, res, next) => {
    try {
      const availability = await DoctorAvailability.create(req.body);
      return res.status(201).json(availability);
    } catch (error) {
      next(error);
    }
  };

  fetch = async (req, res, next) => {
    try {
      const availability = await DoctorAvailability.findByPk(req.params.id);
      if (!availability)
        return res.status(404).json({ message: "Availability not found" });
      return res.status(200).json(availability);
    } catch (error) {
      next(error);
    }
  };

  fetchAll = async (req, res, next) => {
    try {
      const availabilities = await DoctorAvailability.findAll();
      return res.status(200).json(availabilities);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const availability = await DoctorAvailability.findByPk(req.params.id);
      if (!availability)
        return res.status(404).json({ message: "Availability not found" });
      await availability.destroy();
      return res
        .status(200)
        .json({ message: "Availability deleted successfully" });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const availability = await DoctorAvailability.findByPk(req.params.id);
      if (!availability)
        return res.status(404).json({ message: "Availability not found" });
      await availability.update(req.body);
      return res.status(200).json(availability);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new DoctorAvailabilityController();
