const { DoctorAvailability } = require("../../models");

const createDoctorAvailability = async (availabilityData) => {
  try {
    const availability = await DoctorAvailability.create(availabilityData);
    return availability;
  } catch (error) {
    throw new Error("Error creating doctor availability: " + error.message);
  }
};

const getDoctorAvailabilityById = async (id) => {
  try {
    const availability = await DoctorAvailability.findByPk(id);
    if (!availability) throw new Error("Doctor availability not found");
    return availability;
  } catch (error) {
    throw new Error("Error fetching doctor availability: " + error.message);
  }
};

const getAllDoctorAvailabilities = async () => {
  try {
    const availabilities = await DoctorAvailability.findAll();
    return availabilities;
  } catch (error) {
    throw new Error("Error fetching doctor availabilities: " + error.message);
  }
};

const updateDoctorAvailability = async (id, updateData) => {
  try {
    const [affectedRows] = await DoctorAvailability.update(updateData, {
      where: { id },
    });
    if (affectedRows === 0) throw new Error("Doctor availability not found");
    return await getDoctorAvailabilityById(id);
  } catch (error) {
    throw new Error("Error updating doctor availability: " + error.message);
  }
};

const deleteDoctorAvailability = async (id) => {
  try {
    const deletedRows = await DoctorAvailability.destroy({ where: { id } });
    if (deletedRows === 0) throw new Error("Doctor availability not found");
    return true;
  } catch (error) {
    throw new Error("Error deleting doctor availability: " + error.message);
  }
};

module.exports = {
  createDoctorAvailability,
  getDoctorAvailabilityById,
  getAllDoctorAvailabilities,
  updateDoctorAvailability,
  deleteDoctorAvailability,
};
