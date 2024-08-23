const { Op } = require("sequelize");
const {
  Appointment,
  DoctorAvailability,
  DoctorBilling,
  DoctorUnavailability,
  Specialty
} = require("../../models");

const createAppointment = async (appointmentData) => {
  try {
    const { doctorId, appointmentDate, total } = appointmentData;

    const availability = await DoctorAvailability.findOne({
      where: {
        doctorId,
        // full day of the week ex: Monday
        dayOfWeek: new Date(appointmentDate).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        // Operator lte: x <= 10, "less than or equal" (menor o igual que).
        startTime: { [Op.lte]: new Date(appointmentDate).getHours() },
        // Operator gte: x  >= 6, "greater than or equal" (mayor o igual que).
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
        // Operator lte: x <= 10, "less than or equal" (menor o igual que).
        startDate: { [Op.lte]: new Date(appointmentDate) },
        // Operator gte: x  >= 6, "greater than or equal" (mayor o igual que).
        endDate: { [Op.gte]: new Date(appointmentDate) },
      },
    });

    if (unavailability) {
      throw new Error(
        "The doctor is temporarily unavailable at the selected date/time. Please select a different time or date."
      );
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

    //TODO: It's crucial to verify that the price passed from the frontend
    // matches the price calculated on the backend.
    // NEVER TRUST DATA FROM FRONTEND BLINDLY!
    const doctorBilling = await DoctorBilling.findOne({ where: { doctorId } });

    if (!doctorBilling) {
      throw new Error("Doctor billing not found");
    }

    if (doctorBilling.totalAmount !== total) {
      throw new Error("Price mismatch");
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
    const { doctorId, appointmentDate } = updateData;

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
      throw new Error(
        "The doctor is temporarily unavailable at the selected date/time. Please select a different time or date."
      );
    }

    const existingAppointment = await Appointment.findOne({
      where: {
        doctorId,
        appointmentDate,
        id: { [Op.ne]: id },
      },
    });

    if (existingAppointment) {
      throw new Error(
        "There is already an appointment for the doctor at the selected date/time."
      );
    }

    const [affectedRows] = await Appointment.update(updateData, {
      where: { id },
    });

    if (affectedRows === 0) {
      throw new Error("Appointment not found");
    }

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
