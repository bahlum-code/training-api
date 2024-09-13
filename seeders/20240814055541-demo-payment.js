// seeders/xxxxxx-demo-payment.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch existing appointments and users for valid IDs
    const appointments = await queryInterface.sequelize.query(
      "SELECT id FROM \"Appointments\"",
      { type: Sequelize.QueryTypes.SELECT }
    );
    const users = await queryInterface.sequelize.query("SELECT id FROM \"Users\"", {
      type: Sequelize.QueryTypes.SELECT,
    });

    const appointmentIds = appointments.map((app) => app.id);
    const userIds = users.map((user) => user.id);

    // Generate 50 payments
    const payments = [];
    for (let i = 0; i < 50; i++) {
      payments.push({
        paymentMethod: ["Credit Card", "Cash", "Bank Transfer"][i % 3],
        paymentDate: new Date(
          `2024-08-${String((i % 31) + 1).padStart(2, "0")}`
        ),
        appointmentId: appointmentIds[i % appointmentIds.length],
        userId: userIds[i % userIds.length],
        amount: (Math.random() * 200 + 50).toFixed(2), // Random amount between 50 and 250
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("Payments", payments);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Payments", null, {});
  },
};
