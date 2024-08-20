const doctorService = require("../services/doctors");

class DoctorController {
  create = async (req, res) => {
    try {
      const doctor = await doctorService.createDoctor(req.body);
      res.status(201).json(doctor);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  fetch = async (req, res) => {
    try {
      const doctor = await doctorService.getDoctorById(req.params.id);
      res.status(200).json(doctor);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  fetchAll = async (req, res) => {
    try {
      const doctors = await doctorService.getAllDoctors();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const doctor = await doctorService.updateDoctor(req.params.id, req.body);
      res.status(200).json(doctor);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      await doctorService.deleteDoctor(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = new DoctorController();
