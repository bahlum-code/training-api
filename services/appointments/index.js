const { Op } = require("sequelize");
const {
  Appointment,
  DoctorAvailability,
  DoctorUnavailability,
} = require("../../models");

const createAppointment = async (appointmentData) => {
  try {
    const { doctorId, appointmentDate } = appointmentData;
    const availability = await DoctorAvailability.findOne({
      where: {
        doctorId,
        dayOfWeek: new Date(appointmentDate).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        startTime: { [Op.lte]: new Date(appointmentDate).getHours() },
        endTime: { [Op.gte]: new Date(appointmentDate).getHours() },
        isAvailable: true,
      },
    });

    if (!availability) {
      throw new Error("The doctor is not available on the selected date/time.");
    }

    const unavailability = await DoctorUnavailability.findOne({
      where: {
        doctorId,
        startDate: { [Op.lte]: new Date(appointmentDate) },
        endDate: { [Op.gte]: new Date(appointmentDate) },
      },
    });

    if (unavailability) {
      throw new Error("The doctor is not available on the selected date/time.");
    }

    const existingAppointment = await Appointment.findOne({
      where: {
        doctorId,
        appointmentDate,
      },
    });

    if (existingAppointment) {
      throw new Error(
        "There is already an appointment for the doctor at the selected date/time."
      );
    }

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
    const { doctorId, appointmentDate, userId, status, notes, total } =
      updateData;

    const availability = await DoctorAvailability.findOne({
      where: {
        doctorId,
        dayOfWeek: new Date(appointmentDate).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        startTime: { [Op.lte]: new Date(appointmentDate).getHours() },
        endTime: { [Op.gte]: new Date(appointmentDate).getHours() },
        isAvailable: true,
      },
    });

    if (!availability) {
      throw new Error("The doctor is not available on the selected date/time.");
    }

    const unavailability = await DoctorUnavailability.findOne({
      where: {
        doctorId,
        startDate: { [Op.lte]: new Date(appointmentDate) },
        endDate: { [Op.gte]: new Date(appointmentDate) },
      },
    });

    if (unavailability) {
      throw new Error("The doctor is not available on the selected date/time.");
    }

    const existingAppointment = await Appointment.findOne({
      where: {
        doctorId,
        appointmentDate,
        id: { [Op.ne]: id }, // Excluir la cita actual
      },
    });

    if (existingAppointment) {
      ("There is already an appointment for the doctor at the selected date/time.");
    }

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
    const deletedRows = await Appointment.destroy({
      where: { id: Number(id) },
    });
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
