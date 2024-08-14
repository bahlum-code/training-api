// services/appointments/index.js

const { Appointment } = require("../../models"); // Adjust path as needed

const createAppointment = async (appointmentData) => {
  try {
    const appointment = await Appointment.create(appointmentData);
    return appointment;
  } catch (error) {
    throw new Error("Error creating appointment: " + error.message);
  }
};

const getAppointmentById = async (id) => {
  try {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) throw new Error("Appointment not found");
    return appointment;
  } catch (error) {
    throw new Error("Error fetching appointment: " + error.message);
  }
};

const getAllAppointments = async () => {
  try {
    const appointments = await Appointment.findAll();
    return appointments;
  } catch (error) {
    throw new Error("Error fetching appointments: " + error.message);
  }
};

const updateAppointment = async (id, updateData) => {
  try {
    const [affectedRows] = await Appointment.update(updateData, {
      where: { id },
    });
    if (affectedRows === 0) throw new Error("Appointment not found");
    return await getAppointmentById(id); // Return updated appointment
  } catch (error) {
    throw new Error("Error updating appointment: " + error.message);
  }
};

const deleteAppointment = async (id) => {
  try {
    const deletedRows = await Appointment.destroy({ where: { id } });
    if (deletedRows === 0) throw new Error("Appointment not found");
    return true;
  } catch (error) {
    throw new Error("Error deleting appointment: " + error.message);
  }
};

module.exports = {
  createAppointment,
  getAppointmentById,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
};
