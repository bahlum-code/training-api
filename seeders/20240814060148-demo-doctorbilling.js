// seeders/xxxxxx-demo-doctorbilling.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch existing doctors and appointments for valid IDs
    const doctors = await queryInterface.sequelize.query(
      "SELECT id FROM Users WHERE role = 'Doctor'",
      { type: Sequelize.QueryTypes.SELECT }
    );
    const appointments = await queryInterface.sequelize.query(
      "SELECT doctorId, total FROM Appointments",
      { type: Sequelize.QueryTypes.SELECT }
    );

    const doctorIds = doctors.map((doctor) => doctor.id);

    // Calculate total billing amount for each doctor
    const billingMap = doctorIds.reduce((map, doctorId) => {
      const totalAmount = appointments
        .filter((app) => app.doctorId === doctorId)
        .reduce((sum, app) => sum + parseFloat(app.total), 0);

      map.push({
        doctorId,
        totalAmount: totalAmount.toFixed(2),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return map;
    }, []);

    await queryInterface.bulkInsert("DoctorBillings", billingMap);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DoctorBillings", null, {});
  },
};
