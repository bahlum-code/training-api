// seeders/xxxxxx-demo-doctor-availability.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "DoctorAvailabilities",
      [
        {
          dayOfWeek: "Monday",
          startTime: "08:00:00",
          endTime: "12:00:00",
          isAvailable: true,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Monday",
          startTime: "13:00:00",
          endTime: "17:00:00",
          isAvailable: true,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Repeat with different days, times, and doctorIds to reach 20 entries
        {
          dayOfWeek: "Tuesday",
          startTime: "09:00:00",
          endTime: "12:00:00",
          isAvailable: true,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Tuesday",
          startTime: "14:00:00",
          endTime: "18:00:00",
          isAvailable: true,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Continue adding more records
        {
          dayOfWeek: "Wednesday",
          startTime: "08:00:00",
          endTime: "12:00:00",
          isAvailable: true,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Wednesday",
          startTime: "13:00:00",
          endTime: "17:00:00",
          isAvailable: true,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more entries to reach a total of 20
        {
          dayOfWeek: "Thursday",
          startTime: "08:00:00",
          endTime: "12:00:00",
          isAvailable: true,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Thursday",
          startTime: "13:00:00",
          endTime: "17:00:00",
          isAvailable: true,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Friday",
          startTime: "08:00:00",
          endTime: "12:00:00",
          isAvailable: true,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Friday",
          startTime: "13:00:00",
          endTime: "17:00:00",
          isAvailable: true,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Saturday",
          startTime: "09:00:00",
          endTime: "12:00:00",
          isAvailable: true,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Saturday",
          startTime: "13:00:00",
          endTime: "15:00:00",
          isAvailable: true,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Sunday",
          startTime: "09:00:00",
          endTime: "12:00:00",
          isAvailable: true,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Sunday",
          startTime: "13:00:00",
          endTime: "16:00:00",
          isAvailable: true,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Continue with more variations to ensure a total of 20 records
        {
          dayOfWeek: "Monday",
          startTime: "08:00:00",
          endTime: "12:00:00",
          isAvailable: true,
          doctorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dayOfWeek: "Monday",
          startTime: "13:00:00",
          endTime: "17:00:00",
          isAvailable: true,
          doctorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Repeat for more days and doctorIds to get up to 20 records
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DoctorAvailabilities", null, {});
  },
};
