// seeders/xxxxxx-demo-notification.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Notifications",
      [
        {
          notificationType: "Appointment Reminder",
          message: "Your appointment is scheduled for tomorrow.",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Reminder",
          message: "You have an appointment tomorrow at 10 AM.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "A new appointment has been scheduled with you.",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Cancellation",
          message: "An appointment has been cancelled.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Reminder",
          message: "Reminder: Your appointment is tomorrow at 11 AM.",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "You have a new appointment scheduled for next week.",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Reminder",
          message: "Don’t forget your appointment tomorrow at 2 PM.",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "You have a new appointment request.",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Cancellation",
          message: "An appointment has been cancelled by the patient.",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Reminder",
          message: "Reminder: Your appointment is tomorrow at 3 PM.",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "A new appointment has been added to your schedule.",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Reminder",
          message: "Your appointment is scheduled for tomorrow at 9 AM.",
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "You have a new appointment on Thursday.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Cancellation",
          message: "Your appointment has been cancelled by the doctor.",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "A new appointment has been scheduled with you.",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Reminder",
          message:
            "Reminder: Your appointment is scheduled for tomorrow at 4 PM.",
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "You have a new appointment for next Monday.",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Cancellation",
          message: "The appointment scheduled for tomorrow has been cancelled.",
          userId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "A new appointment has been added to your calendar.",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Reminder",
          message: "Your appointment is tomorrow at 5 PM.",
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "New Appointment Scheduled",
          message: "You have a new appointment request for next week.",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notificationType: "Appointment Reminder",
          message:
            "Reminder: Your appointment is scheduled for tomorrow at 6 PM.",
          userId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Notifications", null, {});
  },
};
