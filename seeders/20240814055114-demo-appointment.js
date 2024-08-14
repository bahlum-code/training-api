// seeders/xxxxxx-demo-appointment.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch existing users and doctors for valid IDs
    const users = await queryInterface.sequelize.query(
      "SELECT id FROM Users WHERE role = 'User'",
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    const doctors = await queryInterface.sequelize.query(
      "SELECT id FROM Users WHERE role = 'Doctor'",
      { type: Sequelize.QueryTypes.SELECT }
    );

    const userIds = users.map((user) => user.id);
    const doctorIds = doctors.map((doctor) => doctor.id);

    // Generate 50 appointments
    const appointments = [];
    for (let i = 0; i < 50; i++) {
      appointments.push({
        appointmentDate: new Date(
          `2024-08-${String((i % 31) + 1).padStart(2, "0")}`
        ),
        status: ["Scheduled", "Completed", "Cancelled"][i % 3],
        notes: `Appointment note ${i + 1}`,
        userId: userIds[i % userIds.length],
        doctorId: doctorIds[i % doctorIds.length],
        total: (Math.random() * 200 + 50).toFixed(2), // Random total between 50 and 250
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("Appointments", appointments);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Appointments", null, {});
  },
};
