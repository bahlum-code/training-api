// services/doctorUnavailabilities/index.js

const { DoctorUnavailability } = require("../../models"); // Adjust path as needed

const createDoctorUnavailability = async (unavailabilityData) => {
  try {
    const unavailability = await DoctorUnavailability.create(
      unavailabilityData
    );
    return unavailability;
  } catch (error) {
    throw new Error("Error creating doctor unavailability: " + error.message);
  }
};

const getDoctorUnavailabilityById = async (id) => {
  try {
    const unavailability = await DoctorUnavailability.findByPk(id);
    if (!unavailability) throw new Error("Doctor unavailability not found");
    return unavailability;
  } catch (error) {
    throw new Error("Error fetching doctor unavailability: " + error.message);
  }
};

const getAllDoctorUnavailabilities = async () => {
  try {
    const unavailabilities = await DoctorUnavailability.findAll();
    return unavailabilities;
  } catch (error) {
    throw new Error("Error fetching doctor unavailabilities: " + error.message);
  }
};

const updateDoctorUnavailability = async (id, updateData) => {
  try {
    const [affectedRows] = await DoctorUnavailability.update(updateData, {
      where: { id },
    });
    if (affectedRows === 0) throw new Error("Doctor unavailability not found");
    return await getDoctorUnavailabilityById(id); // Return updated unavailability
  } catch (error) {
    throw new Error("Error updating doctor unavailability: " + error.message);
  }
};

const deleteDoctorUnavailability = async (id) => {
  try {
    const deletedRows = await DoctorUnavailability.destroy({ where: { id } });
    if (deletedRows === 0) throw new Error("Doctor unavailability not found");
    return true;
  } catch (error) {
    throw new Error("Error deleting doctor unavailability: " + error.message);
  }
};

module.exports = {
  createDoctorUnavailability,
  getDoctorUnavailabilityById,
  getAllDoctorUnavailabilities,
  updateDoctorUnavailability,
  deleteDoctorUnavailability,
};
